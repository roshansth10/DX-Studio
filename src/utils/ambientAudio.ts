/**
 * Low-Fidelity Studio Ambient Sound Loop
 * Native Web Audio API synthesis generating an analog warmth drone + tape texture.
 * Starts muted by default with smooth audio gain transitions.
 */

class StudioAudioManager {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isMuted: boolean = true;
  private isInitialized: boolean = false;
  private listeners: Set<(isMuted: boolean) => void> = new Set();
  private noiseSource: AudioBufferSourceNode | null = null;
  private oscillators: OscillatorNode[] = [];

  constructor() {
    // Initialized on first user interaction to comply with browser autoplay policies
  }

  public subscribe(fn: (isMuted: boolean) => void): () => void {
    this.listeners.add(fn);
    fn(this.isMuted);
    return () => {
      this.listeners.delete(fn);
    };
  }

  private notify() {
    this.listeners.forEach((fn) => fn(this.isMuted));
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  private initContext() {
    if (this.isInitialized && this.ctx) return;

    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;

      this.ctx = new AudioContextClass();
      const ctx = this.ctx;

      // Master Gain for smooth cross-fading
      this.masterGain = ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
      this.masterGain.connect(ctx.destination);

      // 1. Dual warm low-end oscillators (A1 = 55Hz, A2 = 110Hz + detune)
      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(55, ctx.currentTime);

      const osc2 = ctx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(110.3, ctx.currentTime); // Slight analog detune

      const osc3 = ctx.createOscillator();
      osc3.type = 'sine';
      osc3.frequency.setValueAtTime(164.8, ctx.currentTime); // E3 fifth

      // Osc Gains
      const g1 = ctx.createGain();
      g1.gain.setValueAtTime(0.28, ctx.currentTime);
      const g2 = ctx.createGain();
      g2.gain.setValueAtTime(0.12, ctx.currentTime);
      const g3 = ctx.createGain();
      g3.gain.setValueAtTime(0.06, ctx.currentTime);

      // Low-pass Filter for warm analog aesthetic
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(260, ctx.currentTime);
      filter.Q.setValueAtTime(2.0, ctx.currentTime);

      // Subtle LFO modulating the filter cutoff for organic analog breathing
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.05, ctx.currentTime); // 20s cycle
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(50, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      lfo.start();

      osc1.connect(g1);
      osc2.connect(g2);
      osc3.connect(g3);

      g1.connect(filter);
      g2.connect(filter);
      g3.connect(filter);

      filter.connect(this.masterGain);

      osc1.start();
      osc2.start();
      osc3.start();
      this.oscillators.push(osc1, osc2, osc3, lfo);

      // 2. Soft Tape Texture (subtle filtered noise buffer)
      const bufferSize = ctx.sampleRate * 4; // 4 second loop
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        output[i] = (b0 + b1 + b2) * 0.04;
      }

      this.noiseSource = ctx.createBufferSource();
      this.noiseSource.buffer = noiseBuffer;
      this.noiseSource.loop = true;

      // Bandpass filter for tape hiss
      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(800, ctx.currentTime);
      noiseFilter.Q.setValueAtTime(1.0, ctx.currentTime);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.015, ctx.currentTime);

      this.noiseSource.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(this.masterGain);

      this.noiseSource.start();
      this.isInitialized = true;
    } catch (err) {
      console.warn('AudioContext initialization prevented:', err);
    }
  }

  public async toggle(): Promise<boolean> {
    if (this.isMuted) {
      await this.unmute();
    } else {
      this.mute();
    }
    return !this.isMuted;
  }

  public async unmute(): Promise<void> {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    if (this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }

    const t = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(t);
    this.masterGain.gain.setValueAtTime(Math.max(0.0001, this.masterGain.gain.value), t);
    // Smooth fade in over 1.2s
    this.masterGain.gain.exponentialRampToValueAtTime(0.07, t + 1.2);

    this.isMuted = false;
    this.notify();
  }

  public mute(): void {
    if (!this.ctx || !this.masterGain) {
      this.isMuted = true;
      this.notify();
      return;
    }

    const t = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(t);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, t);
    // Smooth fade out over 0.6s to avoid clicks
    this.masterGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.6);

    this.isMuted = true;
    this.notify();
  }
}

export const studioAudio = new StudioAudioManager();

import { ThemeMode } from '../types';

/**
 * Accurately determines if the current studio theme is dark (Obsidian or Electric Cobalt),
 * ensuring high-contrast typography and preventing dark text on dark surfaces.
 */
export const isDarkTheme = (theme: ThemeMode): boolean => {
  return theme === 'obsidian' || theme === 'electric-cobalt';
};

/**
 * Determines if the current theme is Sand & Stone.
 */
export const isSandTheme = (theme: ThemeMode): boolean => {
  return theme === 'sand-stone';
};

/**
 * Determines if the current theme is Warm Light (clean Scandinavian white/off-white).
 */
export const isWarmLightTheme = (theme: ThemeMode): boolean => {
  return theme === 'warm-light';
};

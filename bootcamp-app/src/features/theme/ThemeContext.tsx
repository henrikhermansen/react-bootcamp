import { useState, createContext, FC } from 'react';

/* Instead of loosely using Context components and useContext Hook directly in your code
 * this setup is an example of how to reduce the chance of making mistakes with Contexts
 */

export const themes = ['darkgray', 'red', 'green', 'blue'] as const;
export type Theme = typeof themes[number];
type SetActiveTheme = (value: Theme) => void;

const ThemeContext = createContext<Theme | undefined>(themes[0]);
const SetThemeContext = createContext<SetActiveTheme | undefined>(undefined);

export const ThemeProvider: FC = ({ children }) => {
  return <>{children}</>;
};

export const useTheme = () => {
  return themes[0];
};

export const useSetTheme = () => {
  return (theme: Theme) => {};
};

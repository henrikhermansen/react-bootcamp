import { useState, createContext, FC, useContext } from 'react';

/* Instead of loosely using Context components and useContext Hook directly in your code
 * this setup is an example of how to reduce the chance of making mistakes with Contexts
 */

export const themes = ['darkgray', 'red', 'green', 'blue'] as const;
export type Theme = typeof themes[number];
type SetActiveTheme = (value: Theme) => void;

const ThemeContext = createContext<Theme | undefined>(undefined);
const SetThemeContext = createContext<SetActiveTheme | undefined>(undefined);

export const ThemeProvider: FC = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState<Theme>(themes[0]);
  return (
    <ThemeContext.Provider value={activeTheme}>
      <SetThemeContext.Provider value={setActiveTheme}>
        {children}
      </SetThemeContext.Provider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (theme === undefined) {
    throw Error('useTheme must be used inside a <ThemeProvider />');
  }
  return theme;
};

export const useSetTheme = () => {
  const setTheme = useContext(SetThemeContext);
  if (setTheme === undefined) {
    throw Error('useSetTheme must be used inside a <ThemeProvider />');
  }
  return setTheme;
};

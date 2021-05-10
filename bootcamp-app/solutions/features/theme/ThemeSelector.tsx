import { ThemeButton } from './ThemeButton';
import { themes, useTheme } from './ThemeContext';

const style = {
  display: 'flex',
};

export const ThemeSelector = () => {
  const activeTheme = useTheme();
  return (
    <div style={style}>
      {themes.map((theme) => (
        <ThemeButton
          key={theme}
          theme={theme}
          isActive={activeTheme === theme}
        />
      ))}
    </div>
  );
};

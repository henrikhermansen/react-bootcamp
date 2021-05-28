import { Button } from '../../components/Button';
import { Theme, useSetTheme } from './ThemeContext';

const buttonStyle = {
  border: '2px solid #333',
  margin: '10px',
  width: '2em',
  height: '2em',
};

interface ThemeButtonProps {
  theme: Theme;
  isActive: boolean;
  style?: Record<string, any>;
}

export const ThemeButton = ({
  theme,
  isActive,
  style,
  ...props
}: ThemeButtonProps) => {
  const setTheme = useSetTheme();
  return (
    <Button
      {...props}
      style={{
        ...buttonStyle,
        ...style,
        backgroundColor: theme,
        boxShadow: isActive ? 'black 0 0 5px' : 'none',
      }}
      onClick={() => setTheme(theme)}
    />
  );
};

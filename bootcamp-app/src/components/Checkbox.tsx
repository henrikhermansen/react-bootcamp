import { FC, InputHTMLAttributes } from 'react';
import { useTheme } from '../features/theme/ThemeContext';

export const Checkbox: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  children,
  ...props
}) => {
  const theme = useTheme();
  const inputElement = <input type="checkbox" {...props} />;
  return children ? (
    <label style={{ color: theme }}>
      {children}
      {inputElement}
    </label>
  ) : (
    inputElement
  );
};

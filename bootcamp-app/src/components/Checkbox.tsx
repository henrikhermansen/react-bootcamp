import { FC, InputHTMLAttributes } from 'react';
import { useTheme } from '../features/theme/ThemeContext';

export const Checkbox: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  checked,
  onChange,
  children,
  ...props
}) => {
  const theme = useTheme();
  const inputElement = (
    <input type="checkbox" checked={checked} onChange={onChange} {...props} />
  );
  return children ? (
    <label style={{ color: theme }}>
      {children}
      {inputElement}
    </label>
  ) : (
    inputElement
  );
};

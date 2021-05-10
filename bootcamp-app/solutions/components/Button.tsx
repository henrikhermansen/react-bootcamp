import { ButtonHTMLAttributes, FC } from 'react';

const buttonStyle = {
  padding: '.1em .5em',
};

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  style,
  ...props
}) => {
  return (
    <button type="button" {...props} style={{ ...buttonStyle, ...style }} />
  );
};

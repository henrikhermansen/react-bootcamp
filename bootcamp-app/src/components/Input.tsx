import { VFC, InputHTMLAttributes } from 'react';

const inputStyle = {
  padding: '.1em .5em',
};

export const Input: VFC<InputHTMLAttributes<HTMLInputElement>> = ({
  style,
  ...props
}) => {
  return <input {...props} style={{ ...inputStyle, ...style }} />;
};

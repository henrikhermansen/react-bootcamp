import { FC, HTMLAttributes } from 'react';

export const UnorderedList: FC<HTMLAttributes<HTMLUListElement>> = ({
  style,
  ...props
}) => {
  return (
    <ul
      {...props}
      style={{ listStyleType: 'none', paddingLeft: 0, ...style }}
    />
  );
};

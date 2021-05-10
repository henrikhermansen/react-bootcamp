import { FC, HTMLAttributes } from 'react';

const unorderedListStyle = {
  listStyleType: 'none',
  paddingLeft: 0,
};

export const UnorderedList: FC<HTMLAttributes<HTMLUListElement>> = ({
  style,
  ...props
}) => {
  return <ul {...props} style={{ ...unorderedListStyle, ...style }} />;
};

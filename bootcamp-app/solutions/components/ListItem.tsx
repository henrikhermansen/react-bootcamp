import { FC, LiHTMLAttributes } from 'react';

const listItemStyle = {
  margin: '.5em',
  display: 'flex',
  justifyContent: 'space-between',
};

export const ListItem: FC<LiHTMLAttributes<HTMLLIElement>> = ({
  style,
  ...props
}) => {
  return <li {...props} style={{ ...listItemStyle, ...style }} />;
};

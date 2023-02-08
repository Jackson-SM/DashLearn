import React from 'react';
import { StyledSearch } from './styles';

type SearchProps = React.ComponentProps<typeof StyledSearch>;

export const Search = (props: SearchProps) => {
  return <StyledSearch {...props} />;
};

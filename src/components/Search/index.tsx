import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import React, { useRef } from 'react';
import { StyledSearch, StyledSearchButton, StyledSearchField } from './styles';

export const Search = () => {
  const searchInput = useRef<HTMLInputElement>(null);

  const body = document.querySelector('body');
  body?.addEventListener('click', () => {
    searchInput?.current?.classList.remove('active_search');
  });

  return (
    <StyledSearchField>
      <StyledSearchButton onMouseEnter={() => searchInput.current?.classList.add('active_search')}>
        <MagnifyingGlassIcon />
      </StyledSearchButton>
      <StyledSearch ref={searchInput} />
    </StyledSearchField>
  );
};

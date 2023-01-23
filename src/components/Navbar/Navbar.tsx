import React from 'react';
import { Logo } from '../Logo/Logo';
import { Themes } from '../Themes/Themes';
import { StyledNavbar } from './styles';

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo minified />
      <Themes />
    </StyledNavbar>
  );
};

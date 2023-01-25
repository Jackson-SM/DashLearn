import React from 'react';
import { StyledLogo } from './styles';

export type LogoProps = {
  simpleColor?: boolean;
};

export const Logo = (props: LogoProps) => {
  return (
    <StyledLogo className="logo" {...props}>
      DashL<strong>.</strong>
    </StyledLogo>
  );
};

import React from 'react';
import styledConfig from '../../config/styled-components-config';
import { useWidthSize } from '../../hooks/useWidthSize';
import { StyledLogo } from './styles';
import logo from '../../assets/logo.png';

export type LogoProps = {
  simpleColor?: boolean;
  minified?: boolean;
};

export const Logo = ({ minified, ...props }: LogoProps) => {
  const { windowSize } = useWidthSize();

  return (
    <StyledLogo className="logo" {...props} minified={windowSize!.width < styledConfig.medias.mobile}>
      <img src={logo} alt="" />
    </StyledLogo>
  );
};

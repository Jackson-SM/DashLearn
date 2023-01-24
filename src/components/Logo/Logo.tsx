import React from 'react';
import { StyledLogo } from './styles';

export type LogoProps = {
  minified?: boolean;
};

export const Logo = (props: LogoProps) => {
  return (
    <StyledLogo className="logo" {...props}>
      {props.minified ? (
        <>D</>
      ) : (
        <>
          DashL<strong>.</strong>
        </>
      )}
    </StyledLogo>
  );
};

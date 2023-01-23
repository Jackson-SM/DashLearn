import { lighten } from 'polished';
import styled from 'styled-components';
import { LogoProps } from './Logo';

export const StyledLogo = styled.h1<LogoProps>`
  font-family: 'MuseoModerno';
  font-size: 35px;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.primary},
    ${(props) => lighten(0.1, props.theme.colors.secundary)}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  strong {
    background: linear-gradient(
      to right,
      ${(props) => props.theme.colors.primary},
      ${(props) => lighten(0.1, props.theme.colors.secundary)}
    );
    -webkit-background-clip: text;

    text-decoration-color: ${(props) => props.theme.colors.primary};
  }

  ${(props) => (props.minified ? `border: 1px solid red;` : `border: 1px solid green;`)}
`;

import { lighten } from 'polished';
import styled from 'styled-components';
import { LogoProps } from './Logo';

export const StyledLogo = styled.h1<LogoProps>`
  font-family: 'MuseoModerno';
  font-size: 35px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.simpleColor
      ? `color: ${props.theme.colors.text};`
      : `background: linear-gradient(
    to right,
    ${props.theme.colors.primary},
    ${lighten(0.1, props.theme.colors.secundary)}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;`}

  strong {
    background: linear-gradient(
      to right,
      ${(props) => props.theme.colors.primary},
      ${(props) => lighten(0.1, props.theme.colors.secundary)}
    );
    -webkit-background-clip: text;

    text-decoration-color: ${(props) => props.theme.colors.primary};
  }
`;

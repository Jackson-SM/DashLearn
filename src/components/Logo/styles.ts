import { lighten } from 'polished';
import styled from 'styled-components';

export const StyledLogo = styled.h1`
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
      ${(props) => props.theme.colors.secundary},
      ${(props) => lighten(0.1, props.theme.colors.secundary)}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    text-decoration: underline;
    text-decoration-line: line-through;
    text-decoration-color: ${(props) => props.theme.colors.primary};
  }
`;

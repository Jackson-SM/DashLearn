import { lighten } from 'polished';
import styled from 'styled-components';
import { LogoProps } from './Logo';
import styledConfig from '../../config/styled-components-config';

export const StyledLogo = styled.h1<LogoProps>`
  font-family: 'MuseoModerno';
  font-size: 35px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100px;
    height: 100px;
  }

  ${(props) =>
    props.simpleColor
      ? `color: ${props.theme.colors.textLight};`
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

  @media (max-width: ${styledConfig.medias.mobile}px) {
    border-radius: 50%;

    border: 2px solid ${(props) => props.theme.colors.textLight};
    width: 50px;
    height: 50px;
    -webkit-background-clip: content-box;
    -webkit-text-fill-color: initial;
    background: none;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

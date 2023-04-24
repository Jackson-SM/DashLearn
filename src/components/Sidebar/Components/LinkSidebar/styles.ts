import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styledConfig from '../../../../config/styled-components-config';

export const StyledLinkSidebar = styled(Link)<{ active?: boolean }>`
  text-decoration: none;

  color: ${(props) => props.theme.colors.textLight};

  display: flex;
  align-items: center;

  position: relative;

  width: 100%;
  padding: 13px;
  font-size: 14px;
  border-radius: 3px;
  gap: 40px;

  transition: background ease 130ms;

  & svg {
    width: 17px;
    height: 17px;
    justify-self: start;
  }

  &:hover {
    background: linear-gradient(to right, transparent 5%, ${(props) => props.theme.colors.primary});
    color: white;
  }

  ${(props) =>
    props.active &&
    `color: white;
    background: linear-gradient(to right, transparent 5%, ${props.theme.colors.primary});

   &::before {
    opacity: 1;
  }
`}

  @media (max-width: ${styledConfig.medias.mobile}px) {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    width: 50px;
    height: 50px;

    &:hover span {
      transform: translateX(0);
      opacity: 1;
    }

    & span {
      position: absolute;
      background: ${({ theme }) => (theme.title === 'dark' ? theme.colors.backgroundLight2 : theme.colors.backgroundLight)};
      padding: 10px;
      color: ${(props) => (props.theme.title === 'dark' ? props.theme.colors.text : props.theme.colors.secundary)};

      transition: all ease 230ms;

      opacity: 0;
      pointer-events: none;

      left: calc(100% + 12px + 10px);
      top: calc(0% + (12px / 2));

      z-index: 1;

      transform: translateX(-30px);
      border-radius: 5px;
    }
    & span::before {
      content: '';

      position: absolute;
      width: 0;
      height: 0;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;

      border-right: 8px solid
        ${(props) => (props.theme.title === 'dark' ? props.theme.colors.backgroundLight2 : props.theme.colors.backgroundLight)};

      top: calc(50% - 10px);
      left: -8px;

      z-index: 1;
    }
    & svg {
      width: 20px;
      height: 20px;
    }
  }
`;

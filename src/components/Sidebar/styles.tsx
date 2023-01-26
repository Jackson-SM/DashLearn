import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styledConfig from '../../config/styled-components-config';

// Body Sidebar

export const StyledSidebar = styled.nav`
  width: 250px;
  height: 100vh;
  background: ${(props) => props.theme.colors.backgroundLight};

  border-radius: 5px;

  gap: 10px;

  display: flex;
  flex-direction: column;

  grid-area: sidebar;

  @media (max-width: ${styledConfig.medias.mobile}px) {
    width: 80px;
    display: flex;
    align-items: center;
    padding: 5px;
  }
`;

export const StyledTopSidebar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  background: ${(props) => (props.theme.title === 'dark' ? props.theme.colors.primary : props.theme.colors.secundary)};
`;

// Links
export const StyledContentSidebar = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const StyledGroupSidebar = styled.div``;
export const StyledLinkSidebar = styled(Link)<{ active?: boolean }>`
  text-decoration: none;

  color: ${(props) => props.theme.colors.textLight};

  display: flex;
  align-items: center;

  position: relative;

  width: 100%;
  padding: 12px;
  font-size: 15px;
  border-radius: 5px;
  gap: 40px;

  transition: background ease 130ms;

  &::before {
    content: '';

    transition: all ease 400ms;

    pointer-events: none;

    position: absolute;

    background: ${(props) =>
      props.theme.title === 'dark' ? props.theme.colors.primary : props.theme.colors.secundary};

    opacity: 0;
    width: 4px;
    border-radius: 40px;
    height: 100%;
    top: 0;
    right: 0;
  }

  & span {
  }

  & svg {
    width: 20px;
    height: 20px;
    justify-self: start;
  }

  &:hover {
    background: ${(props) => props.theme.colors.backgroundLight2};
    color: ${(props) => (props.theme.title === 'dark' ? props.theme.colors.primary : props.theme.colors.secundary)};
  }

  ${(props) =>
    props.active &&
    `color: ${props.theme.title === 'dark' ? props.theme.colors.primary : props.theme.colors.secundary};
  background: ${props.theme.colors.backgroundLight2};

   &::before {
    opacity: 1;
  }
    `}

  @media (max-width: ${styledConfig.medias.mobile}px) {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;

    &:hover span {
      transform: translateX(0);
      opacity: 1;
    }

    & span {
      position: absolute;
      background: ${(props) =>
        props.theme.title === 'dark' ? props.theme.colors.backgroundLight2 : props.theme.colors.backgroundLight};
      padding: 10px;
      color: ${(props) => (props.theme.title === 'dark' ? props.theme.colors.primary : props.theme.colors.secundary)};

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
        ${(props) =>
          props.theme.title === 'dark' ? props.theme.colors.backgroundLight2 : props.theme.colors.backgroundLight};

      top: calc(50% - 10px);
      left: -8px;

      z-index: 1;
    }
    & svg {
      width: 22px;
      height: 22px;
    }
  }
`;

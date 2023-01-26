import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styledConfig from '../../config/styled-components-config';

// Body Sidebar

export const StyledSidebar = styled.nav`
  width: 250px;
  height: calc((100vh - 60px) - 20px);
  background: ${(props) => props.theme.colors.backgroundLight};

  border-radius: 5px;

  padding: 10px;
  margin: 10px;

  gap: 10px;

  display: flex;
  flex-direction: column;

  @media (max-width: ${styledConfig.medias.mobile}px) {
    width: 80px;
    display: flex;
    align-items: center;
  }
`;

export const StyledTopSidebar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

// Links
export const StyledContentSidebar = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const StyledGroupSidebar = styled.div``;
export const StyledLinkSidebar = styled(Link)`
  text-decoration: none;

  color: ${(props) => props.theme.colors.textLight};

  display: flex;
  align-items: center;

  width: 100%;
  padding: 12px;
  font-size: 15px;
  border-radius: 5px;

  transition: all ease 130ms;

  & span {
    flex: none;
    justify-self: center;
    align-self: center;
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

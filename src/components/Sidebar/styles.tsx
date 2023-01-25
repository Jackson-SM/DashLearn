import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

  width: 100%;
  padding: 12px;

  font-size: 15px;

  border-radius: 5px;

  transition: all ease 130ms;

  padding-left: 30px;

  & span {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  & svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: ${(props) => props.theme.colors.backgroundLight2};
    color: ${(props) => (props.theme.title === 'dark' ? props.theme.colors.primary : props.theme.colors.secundary)};
  }
`;

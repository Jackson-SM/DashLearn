import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Body Sidebar

export const StyledSidebar = styled.nav`
  width: 250px;
  height: calc((100vh - 60px) - 20px);
  background: ${(props) => props.theme.colors.secundary};

  border-radius: 5px;

  padding: 10px;
  margin: 10px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledTopSidebar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Links
export const StyledContentSidebar = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const StyledGroupSidebar = styled.div``;
export const LinkSidebar = styled(Link)`
  text-decoration: none;

  color: white;

  width: 100%;
  padding: 10px;

  display: flex;
  align-items: center;
  gap: 40px;
  font-size: 17px;

  border-radius: 5px;

  transition: all ease 130ms;

  & svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background: white;
    color: ${(props) => props.theme.colors.secundary};
  }
`;

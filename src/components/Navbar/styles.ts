import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  background: ${(props) => props.theme.colors.backgroundLight};
  height: 60px;
  padding: 10px;
  display: flex;
  align-items: center;
`;
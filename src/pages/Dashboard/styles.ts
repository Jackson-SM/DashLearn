import styled from 'styled-components';

export const StyledDashboard = styled.div`
  display: flex;
`;

export const ContainerDashboard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledMain = styled.main`
  grid-area: main;
  height: calc(100vh - 80px);
  overflow: scroll;
`;

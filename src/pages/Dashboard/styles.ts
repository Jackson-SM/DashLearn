import styled from 'styled-components';

export const StyledDashboard = styled.div`
  display: grid;
  grid-template-areas:
    'sidebar navbar navbar navbar'
    'sidebar main main main';
`;
export const StyledMain = styled.main`
  grid-area: main;
`;

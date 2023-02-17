import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  padding: 20px;
`;

export const MainDash = styled.div`
  display: flex;
  gap: 20px;
`;
export const SidebarDash = styled.div``;

export const CardsInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  column-gap: 5px;
`;

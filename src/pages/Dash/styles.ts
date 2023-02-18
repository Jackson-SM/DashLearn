import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  padding: 20px;
`;

export const MainDash = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  border-radius: 5px;
  overflow: hidden;
`;
export const SidebarDash = styled.div``;

export const CardsInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 10px;
`;

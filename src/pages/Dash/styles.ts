import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  padding: 30px;
  overflow: hidden;
`;

export const MainDash = styled.div`
  width: 100%;
`;

export const CardsInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(400px, 1fr));
  gap: 10px;
`;

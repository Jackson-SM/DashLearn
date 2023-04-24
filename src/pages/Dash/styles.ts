import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  padding: 30px;
  height: 100%;
`;

export const MainDash = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CardsInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
`;

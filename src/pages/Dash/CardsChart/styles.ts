import styled from 'styled-components';

export const StyledGraphics = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  gap: 10px;
`;

export const StyledOneGraphic = styled.div`
  background: ${(props) => props.theme.colors.backgroundLight};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  border-radius: 5px;
`;

export const AmountGraphic = styled.span`
  font-size: 30px;
  font-family: 'Montserrat';
  font-weight: bold;
`;

import styled from 'styled-components';

export const StyledGraphics = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  gap: 10px;
`;

export const StyledOneGraphic = styled.div`
  background: ${(props) => props.theme.colors.backgroundLight};
  padding: 10px;

  gap: 20px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  border-radius: 5px;
`;

export const TitleGraphic = styled.span`
  font-size: 18px;
`;

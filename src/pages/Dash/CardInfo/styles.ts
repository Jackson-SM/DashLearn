import styled from 'styled-components';

export const StyledCardInfo = styled.div`
  background: ${(props) => props.theme.colors.backgroundLight};
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const TitleCardInfo = styled.span`
  color: ${(props) => props.theme.colors.textLight};
  font-size: 14px;
  font-family: 'Albert Sans';
`;
export const AmountCardInfo = styled.span`
  color: white;
  font-size: 10px;
  background: ${(props) => props.theme.colors.primary};
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
`;

export const IconCard = styled.div`
  & svg {
    width: 22px;
    height: 22px;
    color: ${(props) => props.theme.colors.primary};
  }
`;

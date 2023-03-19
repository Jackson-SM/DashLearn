import styled from 'styled-components';
import { CardDashProps } from '.';

export const StyledCardDash = styled.div`
  background: ${(props) => props.theme.colors.backgroundLight};

  width: 400px;
  height: 180px;
  margin: 0 auto;

  box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.21);

  border-radius: 5px;

  padding: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DivisionCardDash = styled.div`
  height: 1px;
  width: 100%;

  background: linear-gradient(to right, transparent, rgba(136, 136, 136, 0.26), transparent);
`;

export const TitleCardDash = styled.div`
  color: ${(props) => props.theme.colors.textLight2};
  font-size: 12px;
`;
export const AmountCardDash = styled.div`
  color: ${(props) => props.theme.colors.textLight};
  font-size: 22px;
`;
export const IconCardDash = styled.div<CardDashProps>`
  padding: 15px;
  display: flex;
  border-radius: 50%;

  ${(props) =>
    props.color === 'primary' &&
    `  background: linear-gradient(to bottom, ${props.theme.colors.primary}, ${props.theme.colors.primaryLight});
`}
  ${(props) =>
    props.color === 'secondary' &&
    `  background: linear-gradient(to bottom, ${props.theme.colors.secundary}, ${props.theme.colors.secundaryLight});
`}
  ${(props) =>
    props.color === 'tertiary' &&
    `  background: linear-gradient(to bottom, ${props.theme.colors.tertiary}, ${props.theme.colors.tertiaryLight});
`}

  margin-top: -50px;

  & svg {
    width: 25px;
    height: 25px;
    color: white;
  }
`;

export const TopInfoCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-family: 'MuseoModerno';
`;
export const InfoCardDash = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BottomInfoCard = styled.div`
  padding: 5px;
  & p {
    font-family: 'MuseoModerno';
    font-size: 13px;

    & span {
      color: #02e33e;
    }
  }
`;

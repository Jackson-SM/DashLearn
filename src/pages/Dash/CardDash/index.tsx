import React from 'react';
import {
  AmountCardDash,
  BottomInfoCard,
  DivisionCardDash,
  IconCardDash,
  InfoCardDash,
  StyledCardDash,
  TitleCardDash,
  TopInfoCard,
} from './styles';

export type CardDashProps = React.ComponentProps<typeof StyledCardDash> & {
  color: 'primary' | 'secondary' | 'tertiary';
  title: string;
  amount: number;
  icon: JSX.Element;
};

export const CardDash = ({ color, title, amount, icon, ...props }: CardDashProps) => {
  return (
    <StyledCardDash {...props}>
      <TopInfoCard>
        <IconCardDash color={color}>{icon}</IconCardDash>
        <h1>Ola</h1>
        <InfoCardDash>
          <TitleCardDash>{title}</TitleCardDash>
          <AmountCardDash>+{amount}</AmountCardDash>
        </InfoCardDash>
      </TopInfoCard>
      <DivisionCardDash />
      <BottomInfoCard>
        <p>
          <span>+15</span> in last month
        </p>
      </BottomInfoCard>
    </StyledCardDash>
  );
};

import React from 'react';
import { AmountCardInfo, IconCard, StyledCardInfo, TitleCardInfo } from './styles';

type InfoCardProps = {
  title: string;
  icon: JSX.Element;
  amount: string;
};

type CardInfoProps = {
  info: InfoCardProps;
};

export const CardInfo = ({ info }: CardInfoProps) => {
  return (
    <StyledCardInfo>
      <IconCard>{info.icon}</IconCard>
      <TitleCardInfo>{info.title}</TitleCardInfo>
      <AmountCardInfo>{info.amount}</AmountCardInfo>
    </StyledCardInfo>
  );
};

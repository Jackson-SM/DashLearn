import { ChatBubbleIcon } from '@radix-ui/react-icons';
import React from 'react';
import { AmountCardInfo, AmountInfo, IconCard, StyledCardInfo, TitleCardInfo } from './styles';

type InfoCardProps = {
  title: string;
};

type CardInfoProps = {
  info: InfoCardProps;
};

export const CardInfo = ({ info }: CardInfoProps) => {
  return (
    <StyledCardInfo>
      <IconCard>
        <ChatBubbleIcon />
      </IconCard>
      <AmountInfo>
        <TitleCardInfo>{info.title}</TitleCardInfo>
        <AmountCardInfo>4</AmountCardInfo>
      </AmountInfo>
    </StyledCardInfo>
  );
};

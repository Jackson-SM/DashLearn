import React from 'react';
import { CardInfo } from './CardInfo';
import { CardsInfo, DashboardContainer, MainDash, SidebarDash } from './styles';

export const Dash = () => {
  const cardInfos = [
    { title: 'Friends' },
    { title: 'Tasks' },
    { title: 'Notes' },
    { title: 'Inbox' },
    { title: 'Talks' },
    { title: 'Hours' },
  ];

  return (
    <DashboardContainer>
      <MainDash>
        <CardsInfo>
          {cardInfos.map((info) => {
            return <CardInfo key={info.title} info={info} />;
          })}
        </CardsInfo>
      </MainDash>
      <SidebarDash>
        <h1>sidebar</h1>
      </SidebarDash>
    </DashboardContainer>
  );
};

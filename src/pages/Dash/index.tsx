import React from 'react';
import { CardInfo } from './CardInfo';
import { CardsInfo, DashboardContainer, MainDash, SidebarDash } from './styles';
import { BiGroup, BiListOl, BiNotepad, BiAlarm, BiChat, BiEnvelope } from 'react-icons/bi';
import { CardsChart } from './CardsChart';

export const Dash = () => {
  const cardInfos = [
    { title: 'Friends', icon: <BiGroup />, amount: '7' },
    { title: 'Tasks', icon: <BiListOl />, amount: '16' },
    { title: 'Notes', icon: <BiNotepad />, amount: '4' },
    { title: 'Inbox', icon: <BiEnvelope />, amount: '36' },
    { title: 'Talks', icon: <BiChat />, amount: '5' },
    { title: 'Hours', icon: <BiAlarm />, amount: '10' },
  ];

  return (
    <DashboardContainer>
      <MainDash>
        <CardsInfo>
          {cardInfos.map((info) => {
            return <CardInfo key={info.title} info={info} />;
          })}
        </CardsInfo>
        <CardsChart />
      </MainDash>
      <SidebarDash>
        <h1>sidebar</h1>
      </SidebarDash>
    </DashboardContainer>
  );
};

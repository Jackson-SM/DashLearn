import React from 'react';
import { CardDash } from './components/CardDash';
import { CardsInfo, DashboardContainer, MainDash } from './styles';
import { BsListTask, BsFillCollectionFill } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';
import { Charts } from './components/Charts';
import { Activity } from './components/Activity';

export const Dash = () => {
  return (
    <DashboardContainer>
      <MainDash>
        <CardsInfo>
          <CardDash title="Tasks" amount={30} color="primary" icon={<BsListTask />} />
          <CardDash title="Friends" amount={12} color="secondary" icon={<FaUserFriends />} />
          <CardDash title="Collections" amount={5} color="tertiary" icon={<BsFillCollectionFill />} />
        </CardsInfo>
        <Charts />
        <Activity />
      </MainDash>
    </DashboardContainer>
  );
};

import React from 'react';
import { CardDash } from './CardDash';
import { CardsInfo, DashboardContainer, MainDash } from './styles';
import { BsListTask, BsFillCollectionFill } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';

export const Dash = () => {
  return (
    <DashboardContainer>
      <MainDash>
        <CardsInfo>
          <CardDash title="Tasks" amount={30} color="primary" icon={<BsListTask />} />
          <CardDash title="Friends" amount={12} color="secondary" icon={<FaUserFriends />} />
          <CardDash title="Collections" amount={5} color="tertiary" icon={<BsFillCollectionFill />} />
        </CardsInfo>
      </MainDash>
    </DashboardContainer>
  );
};

import React from 'react';
import { Logo } from '../Logo/Logo';
import { LinkSidebar, StyledContentSidebar, StyledSidebar, StyledTopSidebar } from './styles';
import { TimerIcon } from '@radix-ui/react-icons';

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledTopSidebar>
        <Logo simpleColor minified />
      </StyledTopSidebar>
      <StyledContentSidebar>
        <LinkSidebar to="dashboard">
          <TimerIcon /> Dashboard
        </LinkSidebar>
        <LinkSidebar to="dashboard">
          <TimerIcon /> Timeout
        </LinkSidebar>
        <LinkSidebar to="dashboard">
          <TimerIcon /> Clock
        </LinkSidebar>
        <LinkSidebar to="dashboard">
          <TimerIcon /> Legend
        </LinkSidebar>
        <LinkSidebar to="dashboard">
          <TimerIcon /> Favourites
        </LinkSidebar>
        <LinkSidebar to="dashboard">
          <TimerIcon /> Timer
        </LinkSidebar>
      </StyledContentSidebar>
    </StyledSidebar>
  );
};

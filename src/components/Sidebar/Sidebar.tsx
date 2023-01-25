import React from 'react';
import { Logo } from '../Logo/Logo';
import { StyledContentSidebar, StyledSidebar, StyledTopSidebar } from './styles';
import { BellIcon, DashboardIcon, GearIcon, StarIcon } from '@radix-ui/react-icons';
import { LinkSidebar } from './LinkSidebar';

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledTopSidebar>
        <Logo simpleColor />
      </StyledTopSidebar>
      <StyledContentSidebar>
        <LinkSidebar to="/dashboard">
          <DashboardIcon /> Dashboard
        </LinkSidebar>
        <LinkSidebar to="notes">
          <StarIcon /> Favourites
        </LinkSidebar>
        <LinkSidebar to="settings">
          <BellIcon /> Notifications
        </LinkSidebar>
        <LinkSidebar to="settings">
          <GearIcon /> Settings
        </LinkSidebar>
      </StyledContentSidebar>
    </StyledSidebar>
  );
};

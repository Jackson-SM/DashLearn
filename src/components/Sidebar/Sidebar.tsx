import React from 'react';
import { Logo } from '../Logo/Logo';
import { StyledContentSidebar, StyledGroupSidebar, StyledSidebar, StyledTopSidebar } from './styles';
import { BellIcon, DashboardIcon, GearIcon, StarIcon } from '@radix-ui/react-icons';
import { LinkSidebar } from './LinkSidebar';
import { Themes } from '../Themes/Themes';

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledTopSidebar>
        <Logo simpleColor />
      </StyledTopSidebar>
      <StyledContentSidebar>
        <LinkSidebar to="/dashboard" icon={<DashboardIcon />}>
          Dashboard
        </LinkSidebar>
        <LinkSidebar to="favourites" icon={<StarIcon />}>
          Favourites
        </LinkSidebar>
        <LinkSidebar to="settings" icon={<BellIcon />}>
          Notifications
        </LinkSidebar>
        <LinkSidebar to="settings" icon={<GearIcon />}>
          Settings
        </LinkSidebar>
        <StyledGroupSidebar>
          <Themes />
        </StyledGroupSidebar>
      </StyledContentSidebar>
    </StyledSidebar>
  );
};

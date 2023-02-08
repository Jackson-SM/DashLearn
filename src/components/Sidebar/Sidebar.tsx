import React from 'react';
import { StyledContentSidebar, StyledGroupSidebar, StyledProfileSidebar, StyledSidebar, StyledTopSidebar } from './styles';
import { BellIcon, DashboardIcon, GearIcon, StarIcon } from '@radix-ui/react-icons';
import { LinkSidebar } from './LinkSidebar';
import { Themes } from '../Themes/Themes';
import { Profile } from '../Profile';
import { Search } from '../Search';

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledTopSidebar>
        <StyledProfileSidebar>
          <Profile />
        </StyledProfileSidebar>
        <Search />
      </StyledTopSidebar>
      <StyledContentSidebar>
        <LinkSidebar to="/" icon={<DashboardIcon />}>
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

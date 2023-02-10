import React from 'react';
import { StyledContentSidebar, StyledGroupSidebar, StyledProfileSidebar, StyledSidebar, StyledTopSidebar } from './styles';
import { BackpackIcon, DashboardIcon, GearIcon } from '@radix-ui/react-icons';
import { LinkSidebar } from './LinkSidebar';
import { Themes } from '../Themes/Themes';
import { InfoProfile, Profile } from '../Profile';
import { Search } from '../Search';

type GroupSidebarProps = React.ComponentProps<typeof StyledGroupSidebar> & {
  title: string;
};

export const GroupSidebar = ({ children, title }: GroupSidebarProps) => {
  return (
    <StyledGroupSidebar>
      <span>{title}</span>
      <div>{children}</div>
    </StyledGroupSidebar>
  );
};

export const Sidebar = () => {
  const infosProfiles: InfoProfile[] = [
    {
      name: 'Taylor M.',
      profession: 'Web Development',
      status: 'away',
    },
    {
      name: 'Caroline V.',
      profession: 'Web Development',
      status: 'busy',
    },
    {
      name: 'Kayla T.',
      profession: 'Web Development',
      status: 'online',
    },
  ];

  return (
    <StyledSidebar>
      <StyledTopSidebar>
        <StyledProfileSidebar>
          <Profile info={{ name: 'Jordan M.', profession: 'Designer UI/UX', status: 'busy' }} />
        </StyledProfileSidebar>
        <Search />
      </StyledTopSidebar>
      <StyledContentSidebar>
        <LinkSidebar to="/" icon={<DashboardIcon />}>
          Dashboard
        </LinkSidebar>
        <LinkSidebar to="tasks" icon={<BackpackIcon />}>
          Tasks
        </LinkSidebar>
        <LinkSidebar to="settings" icon={<GearIcon />}>
          Settings
        </LinkSidebar>
        <GroupSidebar title="Appearence">
          <Themes />
        </GroupSidebar>
        <GroupSidebar title="Friends">
          {infosProfiles.map((info) => {
            return <Profile key={info.name} info={info} hideProfession />;
          })}
        </GroupSidebar>
      </StyledContentSidebar>
    </StyledSidebar>
  );
};

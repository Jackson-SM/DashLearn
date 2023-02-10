import React from 'react';
import { StyledContentSidebar, StyledGroupSidebar, StyledProfileSidebar, StyledSidebar, StyledTopSidebar } from './styles';
import { BackpackIcon, BellIcon, ChatBubbleIcon, EnvelopeClosedIcon, GearIcon, HomeIcon } from '@radix-ui/react-icons';
import { LinkSidebar } from './LinkSidebar';
import { Themes } from '../Themes/Themes';
import { InfoProfile, Profile } from '../Profile';
import { Search } from '../Search';
import person from '../../assets/person.png';
import friend1 from '../../assets/friend1.jpg';
import friend2 from '../../assets/friend2.jpeg';
import friend3 from '../../assets/friend3.jpeg';

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
      name: 'Taylor Lewis',
      profession: 'Web Development',
      photo: friend1,
      status: 'away',
    },
    {
      name: 'Caroline Grace',
      profession: 'Web Development',
      photo: friend2,
      status: 'busy',
    },
    {
      name: 'John Smith',
      profession: 'Web Development',
      photo: friend3,
      status: 'online',
    },
  ];

  return (
    <StyledSidebar>
      <StyledTopSidebar>
        <StyledProfileSidebar>
          <Profile info={{ name: 'Jordan M.', profession: 'Designer UI/UX', status: 'busy', photo: person }} />
        </StyledProfileSidebar>
        <Search />
      </StyledTopSidebar>
      <StyledContentSidebar>
        <LinkSidebar to="/" icon={<HomeIcon />}>
          Dashboard
        </LinkSidebar>
        <LinkSidebar to="tasks" icon={<BackpackIcon />}>
          Tasks
        </LinkSidebar>
        <LinkSidebar to="tasks" icon={<BellIcon />}>
          Notification
        </LinkSidebar>
        <LinkSidebar to="tasks" icon={<ChatBubbleIcon />}>
          Message
        </LinkSidebar>
        <LinkSidebar to="tasks" icon={<EnvelopeClosedIcon />}>
          Inbox
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

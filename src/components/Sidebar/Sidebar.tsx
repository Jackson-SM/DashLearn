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
      photo: friend1,
      status: 'away',
    },
    {
      photo: friend2,
      status: 'busy',
    },
    {
      photo: friend3,
      status: 'online',
    },
  ];

  const friendsProfiles = [
    {
      name: 'Taylor Lewis',
      profession: 'Web Development',
    },
    {
      name: 'Caroline Grace',
      profession: 'Designer UI/UX',
    },
    {
      name: 'John Smith',
      profession: 'Software Engineer',
    },
  ];
  return (
    <StyledSidebar>
      <StyledTopSidebar>
        <StyledProfileSidebar>
          <Profile info={{ status: 'busy', photo: person }} name="Jordan M." profession="Design UI/UX" />
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

        <GroupSidebar title="Friends">
          {infosProfiles.map((info, index) => {
            return (
              <Profile
                key={info.photo}
                info={info}
                hideProfession
                name={friendsProfiles[index].name}
                profession={friendsProfiles[index].profession}
              />
            );
          })}
        </GroupSidebar>

        <GroupSidebar title="Appearence">
          <Themes />
        </GroupSidebar>
      </StyledContentSidebar>
    </StyledSidebar>
  );
};

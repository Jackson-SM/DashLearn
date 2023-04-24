import React from 'react';
import { StyledContentSidebar, StyledGroupSidebar, StyledProfileSidebar, StyledSidebar, StyledTopSidebar } from './styles';
import { BackpackIcon, BellIcon, ChatBubbleIcon, EnvelopeClosedIcon, GearIcon, HomeIcon } from '@radix-ui/react-icons';
import { LinkSidebar } from './LinkSidebar';
import { Profile } from '../Profile';
import { Search } from '../Search';
import person from '../../assets/person.png';

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
  return (
    <StyledSidebar>
      <StyledTopSidebar>
        <StyledProfileSidebar>
          <Profile info={{ status: 'online', photo: person }} name="Jordan M." profession="Design UI/UX" />
        </StyledProfileSidebar>
      </StyledTopSidebar>

      <Search />

      <StyledContentSidebar>
        <LinkSidebar to="/" icon={<HomeIcon />}>
          Dashboard
        </LinkSidebar>
        <LinkSidebar to="tasks" icon={<BackpackIcon />}>
          Tasks
        </LinkSidebar>
        <LinkSidebar to="notifications" icon={<BellIcon />}>
          Notification
        </LinkSidebar>
        <LinkSidebar to="messages" icon={<ChatBubbleIcon />}>
          Message
        </LinkSidebar>
        <LinkSidebar to="inbox" icon={<EnvelopeClosedIcon />}>
          Inbox
        </LinkSidebar>
        <LinkSidebar to="settings" icon={<GearIcon />}>
          Settings
        </LinkSidebar>

        {/*
        <GroupSidebar title="Friends">
          {infosProfiles.map((info, index) => {
            return (
              <Profile
                key={info.photo}
                info={info}
                hideProfession
                name={friendsProfiles[index].name}
                profession={friendsProfiles[index].profession}
                message
              />
            );
          })}
        </GroupSidebar>    
        */}
      </StyledContentSidebar>
    </StyledSidebar>
  );
};

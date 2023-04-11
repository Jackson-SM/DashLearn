import React from 'react';
import { PaperPlaneIcon } from '@radix-ui/react-icons';
import {
  StyledCircleProfile,
  StyledContentProfile,
  StyledOptions,
  StyledNameProfile,
  StyledProfile,
  StyledProfilePhoto,
  StyledProfission,
} from './styles';

export type InfoProfile = {
  photo: string;
  status: 'online' | 'busy' | 'away';
};

type ProfileProps = {
  hideProfession?: boolean;
  hideName?: boolean;
  name: string;
  profession: string;
  info: InfoProfile;
  message?: boolean;
};

type CircleProfileProps = {
  info: InfoProfile;
};

export const CircleProfile = ({ info }: CircleProfileProps) => {
  return (
    <StyledCircleProfile status={info.status}>
      <StyledProfilePhoto>
        <img src={info.photo} alt="" />
      </StyledProfilePhoto>
    </StyledCircleProfile>
  );
};

export const Profile = ({ hideProfession, hideName, name, profession, info, message }: ProfileProps) => {
  return (
    <StyledProfile>
      <CircleProfile info={info} />
      <StyledContentProfile>
        {!hideName && <StyledNameProfile>{name}</StyledNameProfile>}
        {!hideProfession && <StyledProfission>{profession}</StyledProfission>}
      </StyledContentProfile>
      {message && (
        <StyledOptions>
          <PaperPlaneIcon />
        </StyledOptions>
      )}
    </StyledProfile>
  );
};

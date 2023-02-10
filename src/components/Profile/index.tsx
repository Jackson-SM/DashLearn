import React from 'react';
import {
  StyledCircleProfile,
  StyledContentProfile,
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

export const Profile = ({ hideProfession, hideName, name, profession, info }: ProfileProps) => {
  return (
    <StyledProfile>
      <CircleProfile info={info} />
      <StyledContentProfile>
        {!hideName && <StyledNameProfile>{name}</StyledNameProfile>}
        {!hideProfession && <StyledProfission>{profession}</StyledProfission>}
      </StyledContentProfile>
    </StyledProfile>
  );
};

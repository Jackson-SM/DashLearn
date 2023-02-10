import React from 'react';
import {
  StyledCircleProfile,
  StyledContentProfile,
  StyledNameProfile,
  StyledProfile,
  StyledProfilePhoto,
  StyledProfission,
} from './styles';
import photo from '../../assets/person.webp';

export type InfoProfile = {
  name: string;
  profession: string;
  status: 'online' | 'busy' | 'away';
};

type ProfileProps = {
  info: InfoProfile;
  hideProfession?: boolean;
  hideName?: boolean;
};

export const Profile = ({ hideProfession, hideName, info }: ProfileProps) => {
  console.log(info.status);

  return (
    <StyledProfile>
      <StyledCircleProfile status={info.status}>
        <StyledProfilePhoto>
          <img src={photo} alt="" />
        </StyledProfilePhoto>
      </StyledCircleProfile>
      <StyledContentProfile>
        {!hideName && <StyledNameProfile>{info.name}</StyledNameProfile>}
        {!hideProfession && <StyledProfission>{info.profession}</StyledProfission>}
      </StyledContentProfile>
    </StyledProfile>
  );
};

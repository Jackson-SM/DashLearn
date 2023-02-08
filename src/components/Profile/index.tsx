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

export const Profile = () => {
  return (
    <StyledProfile>
      <StyledCircleProfile>
        <StyledProfilePhoto>
          <img src={photo} alt="" />
        </StyledProfilePhoto>
      </StyledCircleProfile>
      <StyledContentProfile>
        <StyledNameProfile>Jackson M.</StyledNameProfile>
        <StyledProfission>Web Developer</StyledProfission>
      </StyledContentProfile>
    </StyledProfile>
  );
};

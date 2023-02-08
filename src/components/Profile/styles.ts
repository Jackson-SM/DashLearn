import styled from 'styled-components';

export const StyledProfile = styled.div`
  color: ${({ theme }) => theme.colors.text};

  display: flex;
  align-items: center;
  gap: 20px;
`;
export const StyledCircleProfile = styled.div`
  width: 60px;
  height: 60px;

  padding: 8px;

  z-index: 1;

  position: relative;

  &::before {
    content: '';

    position: absolute;

    height: 10px;
    width: 10px;

    right: -4px;
    top: 60%;

    background: #ffb13d;

    border-radius: 50%;

    border: 3px solid ${(props) => props.theme.colors.backgroundLight};
  }

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  border: 2px solid rgba(255, 255, 255, 0.26);
  border-radius: 50%;
`;
export const StyledProfilePhoto = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 50%;
`;
export const StyledContentProfile = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledNameProfile = styled.span`
  color: ${(props) => props.theme.colors.text};
`;
export const StyledProfission = styled.span`
  font-size: 13px;
  color: ${(props) => props.theme.colors.textLight};
`;

import styled from 'styled-components';
import styledConfig from '../../config/styled-components-config';

// Responsive and Icons options

export const StyledOptions = styled.div`
  justify-self: end;

  padding: 5px;

  & svg {
    color: ${(props) => props.theme.colors.tertiary};
    width: 18px;
    height: 18px;
  }

  @media (max-width: ${styledConfig.medias.mobile}px) {
    position: absolute;

    transition: all ease 200ms;

    opacity: 0;

    transform: translateX(30px);

    background: ${(props) => props.theme.colors.backgroundLight};
    padding: 10px;
  }
`;

// Profile

export const StyledProfile = styled.div`
  color: ${({ theme }) => theme.colors.text};

  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  place-items: center;
  gap: 10px;

  position: relative;

  @media (max-width: ${styledConfig.medias.mobile}px) {
    grid-template-columns: 1fr;

    &:hover {
      ${StyledOptions} {
        transform: translateX(50px);

        opacity: 1;
      }
    }
  }
`;
export const StyledCircleProfile = styled.div<{ status: 'online' | 'busy' | 'away' }>`
  width: 50px;
  height: 50px;
  padding: 5px;

  z-index: 1;

  position: relative;

  border: 1px solid ${(props) => props.theme.colors.backgroundLight2};
  border-radius: 50%;

  &::before {
    content: '';

    position: absolute;

    height: 10px;
    width: 10px;

    right: -4px;
    top: 0;

    border-radius: 50%;

    border: 4px solid ${(props) => props.theme.colors.backgroundLight};

    ${(props) => props.status === 'online' && `background: #5dff57`}
    ${(props) => props.status === 'busy' && `background: #ff251e`}
    ${(props) => props.status === 'away' && `background: #ffb13d`}
  }

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
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

  @media (max-width: ${styledConfig.medias.mobile}px) {
    display: none;
  }
`;
export const StyledNameProfile = styled.span`
  color: ${(props) => props.theme.colors.text};
`;
export const StyledProfission = styled.span`
  font-size: 13px;
  color: ${(props) => props.theme.colors.textLight};
`;

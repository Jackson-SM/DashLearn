import styled from 'styled-components';
import styledConfig from '../../config/styled-components-config';

// Body Sidebar

export const StyledSidebar = styled.nav`
  width: 300px;
  height: 100vh;
  background: ${(props) => props.theme.colors.backgroundLight};

  border-radius: 5px;

  padding: 5px;
  padding-top: 60px;

  gap: 20px;

  display: flex;
  flex-direction: column;

  grid-area: sidebar;

  @media (max-width: ${styledConfig.medias.mobile}px) {
    width: 80px;
    display: flex;
    align-items: center;
    padding: 5px;
  }
`;

export const StyledTopSidebar = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledProfileSidebar = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 10px;
`;

// Links
export const StyledContentSidebar = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  @media (max-width: ${styledConfig.medias.mobile}px) {
    align-items: center;
  }
`;
export const StyledGroupSidebar = styled.div`
  display: flex;
  flex-direction: column;

  & span {
    font-size: 15px;
    font-family: 'Albert Sans';
    color: ${(props) => props.theme.colors.textLight2};
    padding-left: 20px;

    @media (max-width: ${styledConfig.medias.mobile}px) {
      font-size: 12px;
      padding: 0;
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 20px 0;
  }
`;

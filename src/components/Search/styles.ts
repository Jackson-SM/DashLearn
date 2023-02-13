import styled from 'styled-components';
import styledConfig from '../../config/styled-components-config';

export const StyledSearchField = styled.div`
  position: relative;
`;

export const StyledSearch = styled.input.attrs((props) => ({
  type: 'search',
  placeholder: 'Search...',
}))`
  padding: 12px;
  padding-left: 44px;

  background: ${(props) => props.theme.colors.backgroundLight2};
  color: ${(props) => props.theme.colors.textLight};

  outline: none;

  font-family: 'Albert Sans';

  font-size: 16px;

  border: none;

  border-radius: 5px;

  transition: all ease 300ms;

  @media (max-width: ${styledConfig.medias.mobile}px) {
    position: absolute;

    top: 0;
    left: 0;

    transform: translateX(30px);

    padding: 12px;

    opacity: 0;
    pointer-events: none;

    &.active_search {
      opacity: 1;
      pointer-events: auto;
      transform: translateX(60px);
    }
  }
`;

export const StyledSearchButton = styled.button.attrs({
  type: 'submit',
})`
  display: flex;

  background: ${(props) => props.theme.colors.backgroundLight2};
  color: ${(props) => props.theme.colors.text};
  border-radius: 5px;

  position: absolute;

  border: none;
  outline: none;

  padding: 10px;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.secundary};
  }

  & svg {
    width: 22px;
    height: 22px;
  }

  @media (max-width: ${styledConfig.medias.mobile}px) {
    position: relative;
  }
`;

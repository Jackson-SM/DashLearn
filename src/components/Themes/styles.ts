import styled from 'styled-components';

export const ButtonTheme = styled.button`
  display: flex;
  align-items: center;

  background: transparent;

  max-width: max-content;

  outline: none;
  border: none;

  gap: 10px;
  font-size: 16px;
  font-family: 'Nunito';

  cursor: pointer;

  border-radius: 5px;

  color: ${(props) => props.theme.colors.text};

  background: ${(props) => props.theme.colors.backgroundLight2};
`;

export const LineTheme = styled.div`
  position: relative;

  width: 50px;
  height: 10px;
`;
export const CircleTheme = styled.div<{ active: boolean }>`
  position: absolute;

  bottom: -70%;
  left: 0;
  padding: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: ${(props) => props.theme.colors.backgroundLight2};

  ${(props) => props.active && `left: 50%;`}

  transition: all ease 200ms;
`;

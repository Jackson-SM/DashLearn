import styled from 'styled-components';

export const ButtonTheme = styled.button`
  display: flex;
  align-items: center;

  outline: none;
  border: none;

  padding: 10px 20px 10px 20px;
  gap: 10px;
  font-size: 16px;
  font-family: 'Nunito';

  cursor: pointer;

  border-radius: 5px;

  color: white;
  background: linear-gradient(
    to right,
    ${(props) => (props.theme.title === 'dark' ? props.theme.colors.primary : props.theme.colors.secundary)},
    transparent 110%
  );
`;

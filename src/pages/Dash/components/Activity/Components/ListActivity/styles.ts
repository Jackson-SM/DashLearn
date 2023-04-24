import styled from 'styled-components';

export const StyledRowListActivity = styled.tr`
  & > th {
    padding: 10px;
    color: ${(props) => props.theme.colors.textLight2};
    font-weight: normal;
  }
`;
export const StyledListActivityItem = styled.td`
  text-align: center;
  padding: 5px;
  font-size: 14px;

  transition: transform ease 200ms, background ease 130ms;

  &:hover {
    transform: scale(1.04);
    background: ${(props) => props.theme.colors.backgroundLight2};
  }
`;

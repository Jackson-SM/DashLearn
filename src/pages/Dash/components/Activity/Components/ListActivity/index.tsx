import React from 'react';
import * as SList from './styles';

type DataListProps = {
  name: string;
  collection: string;
  status: 'Feito' | 'Cancelado' | 'Em Andamento';
};
type ListAcitivtyProps = React.ComponentProps<typeof SList.StyledRowListActivity> & {
  data: DataListProps;
};

export const ListActivity = ({ children, data, ...props }: ListAcitivtyProps) => {
  return (
    <SList.StyledRowListActivity {...props}>
      <SList.StyledListActivityItem>{data.name}</SList.StyledListActivityItem>
      <SList.StyledListActivityItem>{data.collection}</SList.StyledListActivityItem>
      <SList.StyledListActivityItem>{data.status}</SList.StyledListActivityItem>
    </SList.StyledRowListActivity>
  );
};

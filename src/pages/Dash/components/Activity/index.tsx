import React from 'react';
import * as SActivity from './styles';
import { ListActivity } from './Components/ListActivity';
import { StyledRowListActivity } from './Components/ListActivity/styles';

export const Activity = () => {
  return (
    <SActivity.StyledTableActivity>
      <SActivity.StyledHeaderActivity>
        <StyledRowListActivity>
          <th>Nome</th>
          <th>Coleção</th>
          <th>Status</th>
        </StyledRowListActivity>
      </SActivity.StyledHeaderActivity>
      <SActivity.StyledBodytAcitvity>
        <ListActivity data={{ name: 'Aprender Cypress', collection: 'React', status: 'Em Andamento' }} />
        <ListActivity data={{ name: 'Redux / Redux Saga', collection: 'React', status: 'Em Andamento' }} />
        <ListActivity data={{ name: 'GCP', collection: 'Cloud', status: 'Cancelado' }} />
      </SActivity.StyledBodytAcitvity>
    </SActivity.StyledTableActivity>
  );
};

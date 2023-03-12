import React from 'react';
import { DashboardContainer, MainDash, SidebarDash } from './styles';

export const Dash = () => {
  return (
    <DashboardContainer>
      <MainDash>
        <h1>MainDash</h1>
      </MainDash>
      <SidebarDash>
        <h1>sidebar</h1>
      </SidebarDash>
    </DashboardContainer>
  );
};

import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { ContainerDashboard, StyledDashboard, StyledMain } from './styles';

export const Dashboard = () => {
  return (
    <StyledDashboard>
      <Sidebar />
      <ContainerDashboard>
        <Navbar />
        <StyledMain>
          <Outlet />
        </StyledMain>
      </ContainerDashboard>
    </StyledDashboard>
  );
};

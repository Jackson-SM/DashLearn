import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { StyledDashboard, StyledMain } from './styles';

export const Dashboard = () => {
  return (
    <StyledDashboard>
      <Navbar />
      <Sidebar />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledDashboard>
  );
};

import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../hooks/useTheme';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { GlobalCss } from '../styles/GlobalCss';

function AppRoutes() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <Routes>
        <Route path="/dashboard">
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default AppRoutes;

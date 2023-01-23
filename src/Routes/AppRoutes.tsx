import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard/Dashboard';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard">
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;

import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Favourites } from '../pages/Favourites';

function AppRoutes() {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="favourites" element={<Favourites />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;

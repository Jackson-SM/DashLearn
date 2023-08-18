import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import { Dash } from '../pages/Dash';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Tasks } from '../pages/Tasks';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<h1>Hello World</h1>} />
      <Route path="/" element={<Dashboard />}>
        <Route path="/" element={<Dash />} />
        <Route path="tasks" element={<Tasks />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;

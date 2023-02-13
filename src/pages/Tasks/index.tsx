import React from 'react';
import { Outlet } from 'react-router-dom';

export const Tasks = () => {
  return (
    <div>
      <h1>Tasks</h1>
      <Outlet />
    </div>
  );
};

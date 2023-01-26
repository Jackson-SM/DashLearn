import React from 'react';
import { Outlet } from 'react-router-dom';

export const Favourites = () => {
  return (
    <div>
      <h1>Favourites</h1>
      <Outlet />
    </div>
  );
};

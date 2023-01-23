import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from './contexts/ThemeContext/ThemeContext';
import AppRoutes from './Routes/AppRoutes';
import { GlobalCss } from './styles/GlobalCss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <GlobalCss />
        <AppRoutes />
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

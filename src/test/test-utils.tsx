import { render, RenderOptions } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { ThemeContextProvider } from '../contexts/ThemeContext/ThemeContext';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapperr'>) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };

import { render, RenderOptions } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { light } from '../styles/themes/light';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={light}>{children}</ThemeProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapperr'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };

import React, { useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { dark } from '../../styles/themes/dark';
import { light } from '../../styles/themes/light';

type ContextThemeProps = {
  changeTheme(): void;
  theme: DefaultTheme;
};

export const ContextTheme = React.createContext({} as ContextThemeProps);

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<DefaultTheme>(dark);

  const changeTheme = () => {
    setTheme((oldTheme) => (oldTheme === dark ? light : dark));
  };

  return (
    <ContextTheme.Provider value={{ changeTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ContextTheme.Provider>
  );
};

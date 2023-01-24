import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { ButtonTheme } from './styles';

export const Themes = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <ButtonTheme onClick={changeTheme}>
      {theme.title === 'dark' ? (
        <>
          <MoonIcon />
          Dark
        </>
      ) : (
        <>
          <SunIcon />
          Light
        </>
      )}
    </ButtonTheme>
  );
};

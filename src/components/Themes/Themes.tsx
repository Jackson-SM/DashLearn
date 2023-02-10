import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import * as Theme from './styles';

export const Themes = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <Theme.ButtonTheme onClick={changeTheme}>
      <Theme.LineTheme>
        <Theme.CircleTheme active={theme.title === 'dark'}>
          {theme.title === 'dark' ? (
            <>
              <MoonIcon />
            </>
          ) : (
            <>
              <SunIcon />
            </>
          )}
        </Theme.CircleTheme>
      </Theme.LineTheme>
    </Theme.ButtonTheme>
  );
};

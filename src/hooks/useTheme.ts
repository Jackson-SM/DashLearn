import { useContext } from 'react';
import { ContextTheme } from '../contexts/ThemeContext/ThemeContext';

export const useTheme = () => {
  const { changeTheme, theme } = useContext(ContextTheme);

  return {
    changeTheme,
    theme,
  };
};

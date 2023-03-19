import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      primaryLight: string;
      secundary: string;
      secundaryLight: string;
      tertiary: string;
      tertiaryLight: string;
      background: string;
      backgroundLight: string;
      backgroundLight2: string;
      text: string;
      textLight: string;
      textLight2: string;
    };
  }
}

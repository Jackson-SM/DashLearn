import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secundary: string;
      tertiary: string;
      background: string;
      backgroundLight: string;
      backgroundLight2: string;
      text: string;
      textLight: string;
      textLight2: string;
    };
  }
}

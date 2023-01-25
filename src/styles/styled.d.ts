import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secundary: string;
      background: string;
      backgroundLight: string;
      backgroundLight2: string;
      text: string;
      textLight: string;
    };
  }
}

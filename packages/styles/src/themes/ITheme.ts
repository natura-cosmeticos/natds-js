export interface ITheme {
  dark: boolean;
  roundness: number;
  colors: {
    primary: string;
    background: string;
    surface: string;
    accent: string;
    error: string;
    text: string;
    disabled: string;
    placeholder: string;
    backdrop: string;
  };
  fonts?: {
    regular: string;
    medium: string;
    light: string;
    thin: string;
  };
}

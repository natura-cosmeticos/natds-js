export interface ITheme {
  shape?: {
    borderRadius?: number;
  };
  palette?: {
    type?: 'light' | 'dark';
    primary?: {
      main?: string;
      light?: string;
      dark?: string;
      contrastText?: string;
    };
    secondary?: {
      main: string;
      light?: string;
      dark?: string;
      contrastText?: string;
    };
    error?: {
      main: string;
      light?: string;
      dark?: string;
      contrastText?: string;
    };
    background?: {
      paper?: string;
      default?: string;
    };
    text?: {
      primary?: string;
      secondary?: string;
      disabled?: string;
      hint?: string;
    };
  };
}

import tokens from '../tokens';
import { ITheme } from './ITheme';

const { natura } = tokens;

export const natds:ITheme = {
  dark: false,
  roundness: 4,
  colors: {
    primary: natura.primary["primary-800-default"],
    accent: natura.secondary["secondary-900-default"],
    background: natura["surface-and-background"].light,
    surface: natura["surface-and-background"].white,
    error: natura.feedback.error,
    text: natura.content.black,
    disabled: natura.content["gray-tertiary"],
    placeholder: natura.content["gray-secondary"],
    backdrop: natura["surface-and-background"].dark
  }
};

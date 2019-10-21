import { themes, getTokens } from '@naturacosmeticos/natds-styles';
import { DefaultTheme, Theme } from 'react-native-paper';

const naturaTokens = getTokens(themes.natura);

const naturaTheme: Theme =  {
  ...DefaultTheme,
  colors: {
    primary: naturaTokens["primary-800-default"],
    accent: naturaTokens["secondary-900-default"],
    background: naturaTokens.light,
    surface: naturaTokens.white,
    error: naturaTokens.error,
    text: naturaTokens.black,
    disabled: naturaTokens["gray-tertiary"],
    placeholder: naturaTokens["gray-secondary"],
    backdrop: naturaTokens.dark
  }
};

export const natura = naturaTheme;

import { themes, tokens } from '@naturacosmeticos/natds-styles';
import { createMuiTheme } from '@material-ui/core';

const { spacing } = tokens.spacing;
const { natura: { light, dark } } = themes;

function createTheme({ colors, roundness }: { colors: any, roundness: any }) {
  return createMuiTheme({
    spacing,
    palette: {
      primary: {
        main: colors.primary
      },
      secondary: {
        main: colors.secondary
      },
      error: {
        main: colors.error
      },
      background: {
        default: colors.background
      },
      type: 'light'
    },
    shape: {
      borderRadius: roundness
    }
  });
}

export default {
  light: createTheme(light),
  dark: createTheme(dark)
};

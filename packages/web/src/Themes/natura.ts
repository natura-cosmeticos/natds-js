import { themes, tokens } from '@naturacosmeticos/natds-styles';
import { createMuiTheme } from '@material-ui/core';

const { spacing }  = tokens.spacing;
const { naturaLight } = themes;
const { colors, roundness } = naturaLight;

const natdsTheme = createMuiTheme({
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
    type: 'light',
  },
  shape: {
    borderRadius: roundness
  }
});

export default natdsTheme;

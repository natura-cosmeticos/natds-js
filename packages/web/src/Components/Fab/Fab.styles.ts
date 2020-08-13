/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types */
import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const createFabStyles = (theme: any) => createStyles({

  /**
   * Styles for color={"light"}
   */
  root: {
    backgroundColor: theme.palette.background.default,
    boxShadow: theme.shadows[4],
    color: theme.palette.background.defaultContrastText,
  },

  /**
   * Styles for color={"primary"}
   */
  primary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },

  /**
   * Styles for color={"secondary"}
   */
  secondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
});

export const makeFabStyles = (theme: any) => makeStyles(createFabStyles(theme));

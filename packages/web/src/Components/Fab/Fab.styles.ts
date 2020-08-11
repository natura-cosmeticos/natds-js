/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types */
import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const createFabStyles = ({palette}: any) => createStyles({

  /**
   * Styles for color={"light"}
   */
  root: {
    backgroundColor: palette.background.default,
    color: palette.background.defaultContrastText,
  },

  /**
   * Styles for color={"primary"}
   */
  primary: {
    backgroundColor: palette.primary.main,
    color: palette.primary.contrastText,
  },

  /**
   * Styles for color={"secondary"}
   */
  secondary: {
    backgroundColor: palette.secondary.main,
    color: palette.secondary.contrastText,
  },
});

export const makeFabStyles = (theme: any) => makeStyles(createFabStyles(theme));

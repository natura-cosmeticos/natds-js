import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const makeFabStyles = (theme: any) => makeStyles(createFabStyles(theme));

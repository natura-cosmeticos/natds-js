/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types */
import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { IThemeWeb } from "../../Themes";

type FabStyles = {
  backgroundColor?: string,
  boxShadow?: string,
  color?: string
};

/**
 * @param   {IThemeWeb}   theme   The provided theme
 * @return  {FabStyles}           Styles for `color="primary"
 */
const getStylesForPrimary = (theme: IThemeWeb) => {

  const primary : FabStyles = {};

  if (theme.palette && theme.palette.primary) {
    primary.backgroundColor = theme.palette.primary.main;
    primary.color = theme.palette.primary.contrastText;
  }

  return primary;
};

/**
 * @param   {IThemeWeb}   theme   The provided theme
 * @return  {FabStyles}           Styles for `color="light"`
 */
const getStylesForRoot = (theme: IThemeWeb) => {

  const root : FabStyles = {};

  if (theme.palette && theme.palette.background) {
    root.backgroundColor = theme.palette.background.default;
    root.color = theme.palette.background.defaultContrastText;
  }

  return root;

};

/**
 * @param   {IThemeWeb}   theme   The provided theme
 * @return  {FabStyles}           Styles for `color="secondary"`
 */
const getStylesForSecondary = (theme: IThemeWeb) => {

  const secondary : FabStyles = {};

  if (theme.palette && theme.palette.secondary) {
    secondary.backgroundColor = theme.palette.secondary.main;
    secondary.color = theme.palette.secondary.contrastText;
  }

  return secondary;

};

export const styles = (theme: IThemeWeb) => {

  const root : FabStyles = getStylesForRoot(theme);

  if (theme.shadows) {
    // eslint-disable-next-line prefer-destructuring
    root.boxShadow = theme.shadows[4];
  }

  return {
    root,
    primary: getStylesForPrimary(theme),
    secondary: getStylesForSecondary(theme),
  };

};

export const useStyles = makeStyles(
  createStyles(styles),
  { name: "NatDSFab" },
);

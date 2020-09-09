import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { IThemeWeb } from "../../Themes";

type ButtonRootStyles = {
  paddingLeft?: number,
  paddingRight?: number,
}

type ButtonLabelStyles = {
  lineHeight?: string,
  height?: number,
  marginBottom?: number,
  marginTop?: number
};

type ButtonStyles = {
  root: ButtonRootStyles,
  label: ButtonLabelStyles
}

export const getRootStyles: (theme: IThemeWeb) => (ButtonRootStyles) = (theme) => {

  if (typeof theme.sizes === "undefined" || typeof theme.sizes.small === "undefined") {
    return {} as ButtonRootStyles;
  }

  return {
    paddingLeft: theme.sizes.small,
    paddingRight: theme.sizes.small,
  } as ButtonRootStyles;

};

export const getLabelStyles: (theme: IThemeWeb) => (ButtonLabelStyles) = (theme) => {

  if (typeof theme.sizes === "undefined") {
    return {} as ButtonLabelStyles;
  }

  return {
    lineHeight: `${theme.sizes.standard}px`,
    height: theme.sizes.standard,
    marginBottom: theme.sizes.tiny,
    marginTop: theme.sizes.tiny,
  } as ButtonLabelStyles;

};

export const styles: (theme: IThemeWeb) => ButtonStyles = (theme) => ({
  root: getRootStyles(theme),
  label: getLabelStyles(theme),
} as ButtonStyles);

export const useStyles = makeStyles(createStyles(styles), { name: "NatDSButton" });

export default useStyles;

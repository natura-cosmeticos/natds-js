import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { IThemeWeb } from "../../Themes";

const style = ({ palette }: IThemeWeb) => {

  if (typeof palette === "undefined") {
    return createStyles({
      default: {},
      error: {},
      info: {},
      success: {},
    });
  }

  const {
    background, complementary, error, success,
  } = palette;

  return createStyles({
    default: {
      backgroundColor: background?.paperContrastText,
      color: background?.paper,
    },
    error: {
      backgroundColor: error?.main,
      color: error?.contrastText,
    },
    info: {
      backgroundColor: complementary?.link,
      color: complementary?.linkContrastText,
    },
    success: {
      backgroundColor: success?.main,
      color: success?.contrastText,
    },
    warning: {
      backgroundColor: complementary?.warning,
      color: complementary?.warningContrastText,
    },
  });
};

export const useStyles = makeStyles(style, { name: "NatDSSnackbarContent" });

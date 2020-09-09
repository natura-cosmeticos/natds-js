import createStyles from "@material-ui/core/styles/createStyles";
import { makeStyles } from "@material-ui/core/styles";
import { IThemeWeb } from "../../Themes";

type ColorDefault = {backgroundColor?: string, color?: string};

export const styles: (theme: IThemeWeb) => ({ colorDefault: ColorDefault }) = (theme: IThemeWeb) => {

  const colorDefault : ColorDefault = {};

  if (
    typeof theme.palette === "undefined"
    || typeof theme.palette.background === "undefined"
  ) {
    return { colorDefault };
  }

  if (typeof theme.palette.background.paper !== "undefined") {
    colorDefault.backgroundColor = theme.palette.background.paper;
  }
  if (typeof theme.palette.background.paperContrastText !== "undefined") {
    colorDefault.color = theme.palette.background.paperContrastText;
  }

  return { colorDefault };

};

export const useStyles = makeStyles(createStyles(styles), { name: "NatDSAppBar" });

export default useStyles;

import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles } from "@material-ui/core";
import { IThemeWeb } from "../../Themes";
import { IRatingProps } from "./Rating.props";

export const getFontSize = (theme: IThemeWeb) => ({ size }: IRatingProps): string => {
  const { sizes } = theme;
  const nullValue = "";

  if (size && sizes && sizes[size]) {
    const fontSize = sizes[size];

    return `${fontSize}px`;
  }

  return nullValue;
};

const style = (theme: IThemeWeb) => createStyles({
  root: {
    fontSize: getFontSize(theme),
  },
  iconEmpty: {
    color: theme.palette?.text?.secondary,
  },
});

export const useStyles = makeStyles(style, { name: "NatDSRating" });

export default useStyles;

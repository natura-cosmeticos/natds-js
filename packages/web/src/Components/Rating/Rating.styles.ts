import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles } from "@material-ui/core";
import { IThemeWeb } from "../../Themes";
import { IRatingProps, IRatingSizes } from "./Rating.props";

type RatingStylesArgs = {
  size?: IRatingSizes,
  theme: IThemeWeb
};

export const getFontSize : ({ size, theme }: RatingStylesArgs) => string = ({ size = "small", theme }) => {
  const { sizes } = theme;
  const fontSize = sizes[size];

  return `${fontSize}px`;
};

const style = (theme: IThemeWeb) => createStyles({
  root: ({ size }: IRatingProps) => ({
    fontSize: getFontSize({ size, theme }),
  }),
});

export const useStyles = makeStyles(style, { name: "NatDSRating" });

export default useStyles;
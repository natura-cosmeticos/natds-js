import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles } from "@material-ui/core";
import { getFontSize } from "./getFontSize";
import { IThemeWeb } from "../../Themes";
import { IIconProps } from "./Icon.props";

const style = (theme: IThemeWeb) => createStyles({
  root: ({ size }: IIconProps) => ({
    "-moz-osx-font-smoothing": "grayscale",
    "-webkit-font-smoothing": "antialiased",
    display: "inline-block",
    flexShrink: 0,
    fontFamily: "natds-icons",
    fontSize: getFontSize({ size, theme }),

    /**
     * Overrides the user agent stylesheet for `i` elements
     */
    fontStyle: "normal",
    fontVariant: "normal",
    fontWeight: 400,
    letterSpacing: "normal",
    lineHeight: 1,
    overflow: "hidden",
    textRendering: "auto",
    userSelect: "none",
  }),
});

export const useStyles = makeStyles(style, { name: "NatDSIcon" });

export default useStyles;

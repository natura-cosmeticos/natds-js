import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { ImageProps } from "./Image.props";
import { IThemeWeb } from "../../Themes";
import { getSizeStyleProp } from "../../hooks/useSizeStyleProp";

export const useStyles = makeStyles((theme: IThemeWeb) => createStyles({
  root: ({
    disableSelection, height, maxHeight, maxWidth, radius, width,
  }: ImageProps) => ({
    borderRadius: radius ? theme.shape?.borderRadius : "none",
    height: getSizeStyleProp({
      theme,
      value: height,
    }),
    maxHeight: getSizeStyleProp({
      theme,
      value: maxHeight,
    }),
    maxWidth: getSizeStyleProp({
      theme,
      value: maxWidth,
    }),
    userSelect: disableSelection ? "none" : "auto",
    width: getSizeStyleProp({
      theme,
      value: width,
    }),
  }),
  container: ({ disableSelection, radius }: ImageProps) => ({
    borderRadius: radius ? theme.shape?.borderRadius : "none",
    display: "inline-block",
    lineHeight: "0px",
    position: "relative",
    userSelect: disableSelection ? "none" : "auto",
  }),
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    borderRadius: ({ radius }: ImageProps) => (radius ? theme.shape?.borderRadius : "none"),
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    opacity: "0",
    "&:hover": {
      opacity: "1",
    },
    transition: "opacity .3s",
  },
}), { name: "NatDSImage" });

export default useStyles;

import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { ImageProps } from "./Image.props";
import { IThemeWeb } from "../../Themes";
import { getSizeStyleProp } from "../../hooks/useSizeStyleProp";

export const useStyles = makeStyles((theme: IThemeWeb) => createStyles({
  root: ({
    disableSelection, height, maxHeight, maxWidth, width,
  }: ImageProps) => ({
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
}), { name: "NatDSImage" });

export default useStyles;

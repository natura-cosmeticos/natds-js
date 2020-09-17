import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { ImageProps } from "./Image.props";
import { IThemeWeb } from "../../Themes";
import { getSizeFromProp } from "../shared/getSizeFromProp";

export const useStyles = makeStyles((theme: IThemeWeb) => createStyles({
  root: ({
    disableSelection, height, maxHeight, maxWidth, width,
  }: ImageProps) => ({
    height: getSizeFromProp({
      sizePropValue: height,
      themeSizes: theme.sizes,
    }),
    maxHeight: getSizeFromProp({
      sizePropValue: maxHeight,
      themeSizes: theme.sizes,
    }),
    maxWidth: getSizeFromProp({
      sizePropValue: maxWidth,
      themeSizes: theme.sizes,
    }),
    userSelect: disableSelection ? "none" : "auto",
    width: getSizeFromProp({
      sizePropValue: width,
      themeSizes: theme.sizes,
    }),
  }),
}), { name: "NatDSImage" });

export default useStyles;

/* eslint-disable no-magic-numbers */
import createStyles from "@material-ui/core/styles/createStyles";
import { makeStyles } from "@material-ui/core";
import { IProgressIndicatorProps } from "./ProgressIndicator.props";
import { IThemeWeb } from "../../Themes";

const defaultSize = 48;

export const getLayerSize = ({ size }: IProgressIndicatorProps): number => (size ? size + 4 : defaultSize + 4);

const style = (theme :IThemeWeb) => createStyles({
  circularLayer: {
    backgroundColor: theme.palette?.background?.paper,
    height: getLayerSize,
    width: getLayerSize,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const useStyles = makeStyles(style, { name: "NatdDSProgressIndicator" });

export default useStyles;

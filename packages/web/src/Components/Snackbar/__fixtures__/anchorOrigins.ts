import { ISnackbarProps } from "../Snackbar.props";
import { horizontalAnchorOrigins } from "./horizontalAnchorOrigins";
import verticalAnchorOrigins from "./verticalAnchorOrigins";

type Key = "center bottom" | "center top" | "left bottom" | "left top" | "right bottom" | "right top";

export const anchorOrigins : Record<Key, ISnackbarProps["anchorOrigin"]> = {
  "left bottom": {
    horizontal: horizontalAnchorOrigins.left,
    vertical: verticalAnchorOrigins.bottom,
  },
  "left top": {
    horizontal: horizontalAnchorOrigins.left,
    vertical: verticalAnchorOrigins.top,
  },
  "center bottom": {
    horizontal: horizontalAnchorOrigins.center,
    vertical: verticalAnchorOrigins.bottom,
  },
  "center top": {
    horizontal: horizontalAnchorOrigins.center,
    vertical: verticalAnchorOrigins.top,
  },
  "right bottom": {
    horizontal: horizontalAnchorOrigins.right,
    vertical: verticalAnchorOrigins.bottom,
  },
  "right top": {
    horizontal: horizontalAnchorOrigins.right,
    vertical: verticalAnchorOrigins.top,
  },
};

export default anchorOrigins;

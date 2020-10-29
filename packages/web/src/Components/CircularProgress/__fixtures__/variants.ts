import { ICircularProgressProps } from "../CircularProgress.props";

export const variants : Record<ICircularProgressProps["variant"], ICircularProgressProps["variant"]> = {
  determinate: "determinate",
  indeterminate: "indeterminate",
  static: "static",
};

export default variants;

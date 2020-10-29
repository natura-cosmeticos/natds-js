import { ILinearProgressProps } from "../LinearProgress.props";

export const variants : Record<ILinearProgressProps["variant"], ILinearProgressProps["variant"]> = {
  determinate: "determinate",
  indeterminate: "indeterminate",
  buffer: "buffer",
  query: "query",
};

export default variants;

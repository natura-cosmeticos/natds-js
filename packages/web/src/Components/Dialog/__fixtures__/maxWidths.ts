import { IDialogProps } from "../Dialog";

type Key = "xs" | "sm" | "md" | "lg" | "xl" | "false";

export const maxWidths : Record<Key, IDialogProps["maxWidth"]> = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  false: false,
};

export default maxWidths;

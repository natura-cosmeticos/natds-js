import { IBadgeOrigin } from "../Badge.props";

export const anchorOrigins: Record<string, IBadgeOrigin> = {
  bottomLeft: {
    horizontal: "left",
    vertical: "bottom",
  },
  bottomRight: {
    horizontal: "right",
    vertical: "bottom",
  },
  topLeft: {
    horizontal: "left",
    vertical: "top",
  },
  topRight: {
    horizontal: "right",
    vertical: "top",
  },
};

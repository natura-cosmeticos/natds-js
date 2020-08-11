import {colors, IFabColor} from "./IFabProps";

export const getColorProp: (color?: IFabColor) => (null | "primary" | "secondary" | "light" | string) = (color ?: IFabColor) => {
  if (typeof color === "undefined") {
    return null;
  }
  switch (color) {
  case colors.primary: return colors.primary;
  case colors.secondary: return colors.secondary;
  case colors.light: return "default";
  default: return null;
  }
};

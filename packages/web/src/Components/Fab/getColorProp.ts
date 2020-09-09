import { FabColor, MaterialFabColor } from "./Fab.props";
import colors from "./__fixtures__/colors";

export const getColorProp: (color: FabColor) => MaterialFabColor = (color) => {

  if (typeof color === "undefined") {
    return "default" as MaterialFabColor;
  }

  const colorMapping = {
    [colors.primary]: "primary",
    [colors.secondary]: "secondary",
    [colors.light]: "default",
  };

  if (Object.keys(colorMapping).includes(color)) {
    return colorMapping[color] as MaterialFabColor;
  }

  return "default" as MaterialFabColor;

};

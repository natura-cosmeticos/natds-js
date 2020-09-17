import { ISizes } from "@naturacosmeticos/natds-styles";
import { SizeProp } from "./SizeProp";

type SizePropArgs = {
  sizePropValue?: SizeProp,
  themeSizes?: ISizes
}

type SizeCssValue = "auto" | number | "";

type GetSizeFromPropFunction = ({ sizePropValue, themeSizes }: SizePropArgs) => SizeCssValue;

// eslint-disable-next-line complexity
export const getSizeFromProp : GetSizeFromPropFunction = ({ sizePropValue, themeSizes }) => {
  if (typeof sizePropValue === "undefined") {
    return "";
  }
  if (sizePropValue === "auto" || typeof sizePropValue === "number") {
    return sizePropValue;
  }
  if (typeof themeSizes !== "undefined" && typeof themeSizes[sizePropValue] !== "undefined") {
    return themeSizes[sizePropValue];
  }

  return "";
};

export default getSizeFromProp;

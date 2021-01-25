import { themes as styleThemes } from "@naturacosmeticos/natds-styles";
import { IThemesWeb } from "./IThemesWeb";
import parseShadows from "./parseShadows";

type BrandName = keyof typeof styleThemes;

// eslint-disable-next-line max-lines-per-function
export const themes = Object.keys(styleThemes).reduce((acc, value) => {
  const brand = styleThemes[value as BrandName];

  return {
    ...acc,
    [value]: {
      light: {
        ...brand.light,
        shadows: parseShadows(brand.light.shadows),
      },
      dark: {
        ...brand.dark,
        shadows: parseShadows(brand.dark.shadows),
      },
    },
  };
}, {} as IThemesWeb<BrandName>);

export default themes;

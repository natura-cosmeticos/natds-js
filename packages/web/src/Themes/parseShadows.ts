import { IElevation } from "@naturacosmeticos/natds-styles";
import { Shadows as IShadows } from "@material-ui/core/styles/shadows";
import { createMuiTheme } from "@material-ui/core/styles";

type IElevationKey = keyof IElevation;

export const parseShadows = (shadows: IElevation): IShadows => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const outShadows : any = [];

  createMuiTheme({}).shadows.forEach((shadow, index) => {

    if (shadows[String(index) as IElevationKey]) {

      outShadows.push(shadows[String(index) as IElevationKey]);
    } else {
      outShadows.push(shadow);
    }
  });

  return outShadows;
};

export default parseShadows;

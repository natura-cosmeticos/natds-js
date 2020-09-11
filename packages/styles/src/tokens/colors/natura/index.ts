/* eslint-disable sort-keys */
import themes from "@naturacosmeticos/natds-themes";
import { IColorsNatura } from "./IColorsNatura";

const { color } = themes.natura.light;

/**
 * @deprecated `colors.natura` is deprecated since version 0.19.0 and tt will be removed on version 1.0.
 * Please use colors from `theme.natura.light.palette`.
 */
export const natura: IColorsNatura = {
  primary: {
    colorBrdNatPrimaryOrange: color.secondary,
    colorBrdNatPrimaryYellow: color.primary,
    colorBrdNatPrimaryBrown: "#513528",
    colorBrdNatPrimaryWhite: color.surface,
  },

  secondary: {
    colorBrdNatSecondaryPurple: "#7080A0",
    colorBrdNatSecondaryBlue: "#71CACD",
    colorBrdNatSecondaryGreen: "#B3CA36",
    colorBrdNatSecondaryYellow: "#FFBA1B",
  },

  grayscale: {
    colorBrdBlack: color.onSurface,
    colorBrdNatGray: color.onBackground,
    colorBrdNatGray1: color.mediumEmphasis,
    colorBrdNatGray2: color.lowEmphasis,
    colorBrdNatGray3: "#EEEEEE",
  },

  level: {
    colorLevelSeed: "#7B6A58",
    colorLevelBronze: "#C47F5B",
    colorLevelSilver: "#9D9D9C",
    colorLevelDiamond: "#AEC2CE",
    colorLevelGold: "#D8B75E",
  },

  complementary: {
    colorBrdNatCpBlue1: color.link,
    colorBrdNatCpBlue2: "#6BB1E2",
    colorBrdNatCpBlue3: "#54BECF",
    colorBrdNatCpBlue4: "#8E96A9",
    colorBrdNatCpGreen1: color.success,
    colorBrdNatCpGreen2: "#8EBE2F",
    colorBrdNatCpGreen3: "#C2CD00",
    colorBrdNatCpGreen4: "#BEC950",
    colorBrdNatCpYellow1: "#CCB619",
    colorBrdNatCpYellow2: "#E7CE22",
    colorBrdNatCpYellow3: "#FFD600",
    colorBrdNatCpYellow4: "#8E96A9",
    colorBrdNatCpOrange1: "#E8530E",
    colorBrdNatCpOrange2: "#EE7D00",
    colorBrdNatCpOrange3: "#F49B00",
    colorBrdNatCpOrange4: color.warning,
    colorBrdNatCpRed1: "#DC0719",
    colorBrdNatCpRed2: color.alert,
    colorBrdNatCpRed3: "#ED743E",
    colorBrdNatCpRed4: "#F29669",
    colorBrdNatCpBrown1: "#371E14",
    colorBrdNatCpBrown2: "#5D3B2A",
    colorBrdNatCpBrown3: "#7A573C",
  },

  gradient: {
    colorBrdNatGrad1: `linear-gradient(112deg, #FFDA1B 0%, ${color.secondary} 100%) 0% 0% no-repeat padding-box`,
    colorBrdNatGrad2: "linear-gradient(112deg, #86DDD4 0%, #6F38B5 100%) 0% 0% no-repeat padding-box",
    colorBrdNatGrad3: "linear-gradient(112deg, #728C9E 0%, #FD6C20 100%) 0% 0% no-repeat padding-box",
    colorBrdNatGrad4: "linear-gradient(112deg, #728C9E 0%, #FEE23E 100%) 0% 0% no-repeat padding-box",
    colorBrdNatGrad5: "linear-gradient(112deg, #86DDD4 0%, #FD6C20 100%) 0% 0% no-repeat padding-box",
    colorBrdNatGrad6: "linear-gradient(112deg, #CFDD42 0%, #86DDD4 100%) 0% 0% no-repeat padding-box",
    colorBrdNatGrad7: "linear-gradient(112deg, #A7D8DB 0%, #755847 100%) 0% 0% no-repeat padding-box",
    colorBrdNatGrad8: "linear-gradient(112deg, #E0D5BE 0%, #BDD78F 100%) 0% 0% no-repeat padding-box",
    colorBrdNatGrad9: "linear-gradient(112deg, #F17F4D 0%, #BDD78F 100%) 0% 0% no-repeat padding-box",
    colorBrdNatGrad10: "linear-gradient(112deg, #F17F4D 0%, #A7D8DB 100%) 0% 0% no-repeat padding-box",
    colorBrdNatGrad11: "linear-gradient(112deg, #E0D5BE 0%, #F17F4D 100%) 0% 0% no-repeat padding-box",
    colorBrdNatGrad12: "linear-gradient(112deg, #FEED92 0%, #F17F4D 100%) 0% 0% no-repeat padding-box",
    colorBrdNatGrad13: "linear-gradient(112deg, #BDD78F 0%, #DCEFF3 100%) 0% 0% no-repeat padding-box",
    colorBrdNatGrad14: "linear-gradient(112deg, #E8E0D1 0%, #DBE7B1 100%) 0% 0% no-repeat padding-box",
    colorBrdNatGrad15: "linear-gradient(112deg, #FAC6AB 0%, #DCEFF3 100%) 0% 0% no-repeat padding-box",
    colorBrdNatGrad16: "linear-gradient(112deg, #E8E0D1 0%, #FAC6AB 100%) 0% 0% no-repeat padding-box",
    colorBrdNatGrad17: "linear-gradient(112deg, #FFEDB5 0%, #FAC6AB 100%) 0% 0% no-repeat padding-box",
  },
};

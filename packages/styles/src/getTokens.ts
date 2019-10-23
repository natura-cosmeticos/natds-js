export interface IPrimary {
  "primary-800-default": string;
}

export interface IPrimaryVariants {
  "primary-50-light": string;
  "primary-100": string;
  "primary-200": string;
  "primary-300": string;
  "primary-400": string;
  "primary-500": string;
  "primary-600": string;
  "primary-700": string;
  "primary-900-dark": string;
}

export interface ISecondary {
  "secondary-900-default": string;
}

export interface ISecondaryVariants {
  "secondary-50-light": string;
  "secondary-100": string;
  "secondary-200": string;
  "secondary-300": string;
  "secondary-400": string;
  "secondary-500": string;
  "secondary-600": string;
  "secondary-700": string;
  "secondary-800": string;
}

export interface ISurfaceAndBackground {
  "white": string;
  "light": string;
  "dark": string;
}

export interface IContent {
  "black": string;
  "gray-primary": string;
  "gray-secondary": string;
  "gray-tertiary": string;
  "info": string;
}

export interface IFeedback {
  "success": string;
  "warning": string;
  "error": string;
}

export interface ILevelCN {
  "bronze": string;
  "diamond": string;
  "gold": string;
  "seed": string;
  "silver": string;
}

export interface IBrandPrimary {
  "brand-primary-brow": string;
  "brand-primary-orange": string;
  "brand-primary-800-default": string;
  "white": string;
}

export interface IBrandSecondary {
  "brand-secondary-blue": string;
  "brand-secondary-green": string;
  "brand-secondary-purple": string;
  "brand-secondary-yellow": string;
}

export interface IBrandComplementary {
  "brand-comp-purple-1": string;
  "brand-comp-purple-2": string;
  "brand-comp-purple-3": string;
  "brand-comp-purple-4": string;
  "brand-comp-blue-1": string;
  "brand-comp-blue-2": string;
  "brand-comp-blue-3": string;
  "brand-comp-blue-4": string;
  "brand-comp-green-1": string;
  "brand-comp-green-2": string;
  "brand-comp-green-3": string;
  "brand-comp-green-4": string;
  "brand-comp-yellow-1": string;
  "brand-comp-yellow-2": string;
  "brand-comp-yellow-3": string;
  "brand-comp-yellow-4": string;
  "brand-comp-orange-1": string;
  "brand-comp-orange-2": string;
  "brand-comp-orange-3": string;
  "brand-comp-orange-4": string;
  "brand-comp-red-1": string;
  "brand-comp-red-2": string;
  "brand-comp-red-3": string;
  "brand-comp-red-4": string;
}

export interface IToken {
  primary: IPrimary;
  "primary-variants": IPrimaryVariants;
  secondary: ISecondary;
  "secondary-variants": ISecondaryVariants;
  "surface-and-background": ISurfaceAndBackground;
  content: IContent;
  feedback: IFeedback;
  "levels-cn": ILevelCN;
  "brand-primary": IBrandPrimary;
  "brand-secondary": IBrandSecondary;
  "brand-complementary": IBrandComplementary;
}

export function getTokens(themeName: string): IToken {
  try{
    const theme: IToken = require(`../themes/${themeName}.json`);
    return theme;
  } catch(error) {
    throw new Error('Theme not found');
  }
}

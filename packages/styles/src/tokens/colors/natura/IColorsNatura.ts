import { IPrimary } from "./IPrimary";
import { ISecondary } from "./ISecondary";
import { IGrayscale } from "./IGrayscale";
import { ILevel } from "./ILevel";
import { IComplementary } from "./IComplementary";
import { IGradient } from "./IGradient";

/**
 * @deprecated `IColorsNatura` is deprecated since v0.20 and will be removed at v1.0.
 * Please use `themes.natura.light` or `theme.natura.dark` interfaces.
 */
export interface IColorsNatura {
  complementary: IComplementary;
  gradient: IGradient;
  grayscale: IGrayscale;
  level: ILevel;
  primary: IPrimary;
  secondary: ISecondary;
}

/**
 * @todo Separate classes from IButtonSizes.ts file
 */
export interface IButtonSizes {
  small: IButtonProperties;
  medium: IButtonProperties;
  large: IButtonProperties;
}

interface IButtonProperties {
  height: number;
  paddingBottom: number;
  paddingLeft: number;
  paddingRight: number;
  paddingTop: number;
}

export default interface IButtonSize {
  small: IButtonProperties;
  medium: IButtonProperties;
  large: IButtonProperties;
}

interface IButtonProperties {
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  minHeight: number;
}

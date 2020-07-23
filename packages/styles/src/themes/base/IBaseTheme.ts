import {
  IAvatarSizes, IButtonSizes, IElevation, IIconSizes, ISizes,
} from "../..";

export interface IBaseTheme {
  avatarSizes: IAvatarSizes;
  buttonSizes: IButtonSizes;
  iconSizes: IIconSizes;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  overrides: any;
  shadows: IElevation;
  shape: { badgeBorderRadius: number; borderRadius: number };
  sizes: ISizes;
  spacing: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  typography: any;
}

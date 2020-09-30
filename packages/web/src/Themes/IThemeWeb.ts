import { IFont, ITheme } from "@naturacosmeticos/natds-styles";
import { Shadows as IShadows } from "@material-ui/core/styles/shadows";

export interface IThemeWeb
  extends Pick<ITheme,
    | "avatarSizes"
    | "iconSizes"
    | "palette"
    | "shape"
    | "sizes"
    | "spacing"
    > {
  shadows?: IShadows;
  typography: {
    body1?: IFont;
    body2?: IFont;
    button?: IFont;
    caption?: IFont;
    fontFamily?: string;
    fontFamilyBrand1?: string;
    fontFamilyBrand2?: string;
    fontFamilyBrand3?: string;
    fontWeightBold?: number;
    fontWeightLight?: number;
    fontWeightMedium?: number;
    fontWeightRegular?: number;
    h1?: IFont;
    h2?: IFont;
    h3?: IFont;
    h4?: IFont;
    h5?: IFont;
    h6?: IFont;
    inherit?: IFont;
    overline?: IFont;
    srOnly?: IFont;
    subtitle1?: IFont;
    subtitle2?: IFont;
  };
}

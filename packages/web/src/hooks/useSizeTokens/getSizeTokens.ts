import { ISizes } from "@naturacosmeticos/natds-styles";
import { IThemeWeb } from "../../Themes";

export const getSizeTokens: (theme: IThemeWeb) => ISizes = (theme) => theme.sizes;

export default getSizeTokens;

import * as React from "react";
import {FabProps} from "@material-ui/core/Fab";
import {IThemeWeb} from "../../Themes";

type IFabColor = 'primary' | 'secondary' | 'light';

/**
 * @todo fix(web): TS2320 Interface 'IFabProps' cannot simultaneously extend two types on IFabProps
 */
// @ts-ignore
export interface IFabProps extends React.HtmlHTMLAttributes<HTMLButtonElement>, Pick<FabProps,
  | 'size'
  | 'href'
  | 'disableFocusRipple'
  | 'variant'
  | 'children'
  | 'disabled'
  > {
  /**
   * @optional
   * The color of the component
   */
  color?: IFabColor;
  /**
   * @optional
   */
  theme?: IThemeWeb | unknown;
}

import { PopperProps } from "@material-ui/core/Popper";
import { IThemeWeb } from "../../../Themes";

export interface IStyledPopperProps extends PopperProps {

  /**
   * @required
   * @type number
   */
  maxWidth: number,

  /**
   * @required
   * @type IThemeWeb
   */
  theme: IThemeWeb,
}

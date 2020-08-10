import {TableProps as MaterialTableProps} from "@material-ui/core/Table/Table";
import {IThemeWeb} from "../../Themes";

export interface ITableProps extends MaterialTableProps {

  /**
   * @optional
   * @default 'default'
   * The color to apply to the background based on the theme
   */
  theme?: IThemeWeb | unknown;

  /**
   * @optional
   * @default false
   * With dividers
   */
  dividers?: boolean;

  /**
   * @optional
   * @default false
   * With rounded borders
   */
  rounded?: boolean;

  /**
   * @optional
   * @default false
   * With stripes
   */
  striped?: boolean;
}

import * as React from "react";
import { IThemeWeb } from "../Themes";

export interface IProviderProps {

  /**
   * @required
   * @type node
   */
  children: React.ReactNode;

  /**
   * Defaults to Natura Light theme
   *
   * @optional
   * @type IThemeWeb
   */
  theme?: IThemeWeb;

  /**
   * A css prefix to be added in the dynamic class names generation.
   * This option is used to isolate the generated class names and it is useful if
   * you are developing a micro frontend or
   * adding the lib in a project with another instance of @material-ui
   * @default natds
   * @optional
   * @type string
   */
  cssPrefix?: string;
}

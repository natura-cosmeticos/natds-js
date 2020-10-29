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
}

import * as React from "react";
import { BottomNavigationProps } from "@material-ui/core/BottomNavigation";

export interface IBottomNavigationProps extends BottomNavigationProps {

  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   *
   * @optional
   * @type React.ElementType
   */
  component?: React.ElementType

  /**
   * If `true`, all `BottomNavigationAction`s will show their labels.
   *
   * By default, only the selected `BottomNavigationAction` will show its label.
   *
   * @optional
   * @type boolean
   */
  showLabels?: boolean
}

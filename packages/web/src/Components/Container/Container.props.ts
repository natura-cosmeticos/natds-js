import * as React from "react";
import { ContainerProps } from "@material-ui/core/Container";

export interface IContainerProps extends ContainerProps {

  /**
   * The component used for the root node.
   *
   * Either a string to use a HTML element or a component.
   * Will be `div` by default.
   *
   * @optional
   * @type React.ElementType
   */
  component?: React.ElementType
}

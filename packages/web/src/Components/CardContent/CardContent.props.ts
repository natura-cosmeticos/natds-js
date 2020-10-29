import * as React from "react";
import { CardContentProps } from "@material-ui/core/CardContent";

export interface ICardContentProps extends CardContentProps {

  /**
   * The content of the component.
   *
   * @optional
   * @type node
   */
  children?: CardContentProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * @optional
   * @type object
   */
  classes?: CardContentProps["classes"]

  /**
   * The component used for the root node. Either a string to use a DOM element or a component.
   *
   * @component "div"
   * @type element
   */
  component?: React.ReactNode;
}

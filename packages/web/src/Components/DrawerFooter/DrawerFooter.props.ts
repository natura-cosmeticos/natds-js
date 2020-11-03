import * as React from "react";

export interface IDrawerFooterProps {

  /**
   * @optional
   * @todo make children property required
   * @type node
   */
  children?: React.ReactNode;

  /**
   * The component used for the root node.
   *
   * Either a `string` to use or a HTML element or a component.
   *
   * @default "div"
   * @optional
   * @type element
   */
  component?: React.ElementType;
}

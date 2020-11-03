import * as React from "react";

export interface IDrawerBodyProps {

  /**
   * The content of the component.
   *
   * @optional
   * @todo make property children required
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

  /**
   * The component used for the scroll node.
   *
   * Either a `string` to use or a HTML element or a component.
   *
   * @default "div"
   * @since 0.24
   * @type element
   */
  scrollComponent?: React.ElementType
}

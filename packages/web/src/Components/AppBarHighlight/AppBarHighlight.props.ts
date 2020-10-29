import * as React from "react";

export interface AppBarHighlightProps {

  /**
   * Used to render elements inside the `AppBarHighlight`.
   * This can be an `element` like `<Typography />`.
   *
   * @required
   * @type React.ReactNode
   */
  children: React.ReactNode,

  /**
   * Specifies one or more class names for the element.
   *
   * Will be forwarded to the HTML element as the `class` attribute.
   *
   * @optional
   */
  className?: string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element of a component.
   *
   * Defaults to `div`.
   *
   * @optional
   * @type React.ElementType
   */
  component?: React.ElementType,

}

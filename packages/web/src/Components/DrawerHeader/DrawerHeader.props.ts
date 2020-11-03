import * as React from "react";

export interface IDrawerHeaderProps {
  avatarChildren?: React.ReactNode;

  /**
   * The component used for the avatar node.
   *
   * Either a `string` to use or a HTML element or a component.
   *
   * Defaults to `Avatar`
   *
   * @optional
   * @type element
   */
  avatarComponent?: React.ElementType;
  avatarSrc?: string;
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
  primary?: React.ReactNode;
  secondary?: React.ReactNode;
}

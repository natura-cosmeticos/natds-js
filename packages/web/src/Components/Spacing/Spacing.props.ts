import * as React from "react";
import { ISizes } from "@naturacosmeticos/natds-styles";

export type ISpacingProps = {

  /**
   * Used to render elements inside the Spacing.
   * This can be an element, or just a string.
   */
  children?: React.ReactNode,

  className?: string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element of a component.
   */
  component?: React.ElementType,

  /**
   * Alias for `margin` property
   */
  m?: keyof ISizes,

  /**
   * Defines margin
   */
  margin?: keyof ISizes,

  /**
   * Defines bottom margin
   */
  marginBottom?: keyof ISizes,

  /**
   * Defines left margin
   */
  marginLeft?: keyof ISizes,

  /**
   * Defines right margin
   */
  marginRight?: keyof ISizes,

  /**
   * Defines top margin
   */
  marginTop?: keyof ISizes,

  /**
   * Defines left and right margins
   */
  marginX?: keyof ISizes,

  /**
   * Defines bottom and top margins
   */
  marginY?: keyof ISizes,

  /**
   * Alias for `margin-bottom` property
   */
  mb?: keyof ISizes,

  /**
   * Alias for `margin-left` property
   */
  ml?: keyof ISizes,

  /**
   * Alias for `margin-right` property
   */
  mr?: keyof ISizes,

  /**
   * Alias for `margin-top` property
   */
  mt?: keyof ISizes,

  /**
   * Alias for `marginX` property
   */
  mx?: keyof ISizes,

  /**
   * Alias for `marginY` property
   */
  my?: keyof ISizes,

  /**
   * Alias for `padding` property
   */
  p?: keyof ISizes,

  /**
   * Defines padding
   */
  padding?: keyof ISizes,

  /**
   * Defines bottom padding
   */
  paddingBottom?: keyof ISizes,

  /**
   * Defines left padding
   */
  paddingLeft?: keyof ISizes,

  /**
   * Defines right padding
   */
  paddingRight?: keyof ISizes,

  /**
   * Defines top padding
   */
  paddingTop?: keyof ISizes,

  /**
   * Defines left and right paddings
   */
  paddingX?: keyof ISizes,

  /**
   * Defines bottom and top paddings
   */
  paddingY?: keyof ISizes,

  /**
   * Alias for `padding-bottom` property
   */
  pb?: keyof ISizes,

  /**
   * Alias for `padding-left` property
   */
  pl?: keyof ISizes,

  /**
   * Alias for `padding-right` property
   */
  pr?: keyof ISizes,

  /**
   * Alias for `padding-top` property
   */
  pt?: keyof ISizes,

  /**
   * Alias for `paddingX` property
   */
  px?: keyof ISizes,

  /**
   * Alias for `paddingY` property
   */
  py?: keyof ISizes,

};

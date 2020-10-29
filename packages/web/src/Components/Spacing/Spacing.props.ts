import * as React from "react";
import { SpacingMarginProps } from "./Spacing.margin.props";
import { SpacingPaddingProps } from "./Spacing.padding.props";

export type SpacingMarginCssPropKey = "marginBottom" | "marginLeft" | "marginRight" | "marginTop";
export type SpacingPaddingCssPropKey = "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop";
export type SpacingStylePropKey = SpacingMarginCssPropKey | SpacingPaddingCssPropKey
export type SpacingMarginAndPaddingProps = SpacingMarginProps & SpacingPaddingProps;

export interface ISpacingProps extends SpacingMarginAndPaddingProps {

  /**
   * Used to render elements inside the Spacing.
   * This can be an element, or just a string.
   *
   * @optional
   * @type React.ReactNode
   */
  children?: React.ReactNode,

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
   */
  component?: React.ElementType,

  display?: "block" | "flex" | "inline" | "inline-block" | "inline-flex" | Record<string, string>,

  /**
   * Specifies an inline style for an element.
   *
   * The `style` property will override any style set globally.
   * Please avoid using this property on production, prefer `className`.
   *
   * Will be forwarded to the HTML element as the `style` attribute.
   *
   * @optional
   * @type React.CSSProperties
   */
  style?: React.CSSProperties,

}

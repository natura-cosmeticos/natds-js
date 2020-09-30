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
   */
  children?: React.ReactNode,

  className?: string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element of a component.
   */
  component?: React.ElementType,

}

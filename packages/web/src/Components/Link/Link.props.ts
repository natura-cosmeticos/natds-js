import * as React from "react";
import { LinkProps } from "@material-ui/core/Link";

type LinkColor =
  | "default"
  | "error"
  | "inherit"
  | "initial"
  | "primary"
  | "secondary"
  | "textPrimary"
  | "textSecondary"
;

export type MaterialLinkColor = LinkProps["color"];

export interface ILinkProps extends Omit<LinkProps, "color"> {

  /**
   * The`Link` color.
   *
   * @default "default"
   * @optional
   * @type "default" | "error" | "inherit" | "initial" | "primary" | "secondary" | "textPrimary" | "textSecondary"
   */
  color?: LinkColor;

  /**
   * The content of the link.
   *
   * @required
   * @type node
   */
  children: LinkProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * Check the [CSS API](https://material-ui.com/api/link/#css) for more details.
   *
   * @see https://material-ui.com/api/link/#css
   */
  classes?: LinkProps["classes"]

  /**
   * The component used for the root node. Either a string to use a DOM element or a component.
   *
   * @default "a"
   * @optional
   * @type element
   */
  component?: React.ElementType

  /**
   * The `classes` prop applied to the `Typography` element.
   *
   * @optional
   * @type object
   */
  TypographyClasses?: LinkProps["TypographyClasses"]

  /**
   * Controls when the link should have an underline.
   *
   * @default "hover"
   * @optional
   * @type "none" | "hover" | "always"
   */
  underline?: LinkProps["underline"]

  /**
   * Applies the theme typography styles.
   *
   * @default "inherit"
   * @type string
   */
  variant?: LinkProps["variant"]

}

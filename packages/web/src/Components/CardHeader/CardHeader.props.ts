import { CardHeaderProps } from "@material-ui/core/CardHeader";
import * as React from "react";

export interface ICardHeaderProps extends Omit<CardHeaderProps, "title"> {

  /**
   * The action to display.
   *
   * @optional
   * @type node
   */
  action?: CardHeaderProps["action"]

  /**
   * Apply `Avatar`.
   *
   * @optional
   * @see Avatar
   * @type node
   */
  avatar?: CardHeaderProps["avatar"]

  /**
   * Override or extend the styles applied to the component.
   *
   * @optional
   * @type object
   */
  classes?: CardHeaderProps["classes"]

  /**
   * The component used for the root node.
   *
   * Either a string to use a DOM element or a component.
   *
   * @default "div"
   * @optional
   * @type element
   */
  component?: React.ReactElement

  /**
   * If `true`, subheader and title won't be wrapped by a Typography component.
   *
   * This can be useful to render an alternative `Typography` variant by wrapping the title text,
   * and optional subheader text with the `Typography` component.
   *
   * @default false
   * @optional
   * @see Typography
   * @type bool
   */
  disableTypography?: CardHeaderProps["disableTypography"]

  /**
   * The content of the component.
   *
   * @optional
   * @type node
   */
  subheader?: CardHeaderProps["subheader"]

  /**
   * These props will be forwarded to the subheader (as long as `disableTypography` is not `true`).
   *
   * @optional
   * @see ITypographyProps
   * @type object
   */
  subheaderTypographyProps?: CardHeaderProps["subheaderTypographyProps"]

  /**
   * The content of the `Card` Title.
   *
   * @optional
   * @type node
   */
  title?: React.ReactNode

  /**
   * These props will be forwarded to the title (as long as `disableTypography` is not `true`).
   *
   * @optional
   * @see ITypographyProps
   * @type object
   */
  titleTypographyProps?: CardHeaderProps["titleTypographyProps"]

}

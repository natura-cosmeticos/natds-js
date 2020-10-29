import * as React from "react";
import { BreadcrumbsProps } from "@material-ui/core/Breadcrumbs";

export interface IBreadcrumbsProps extends BreadcrumbsProps {

  /**
   * The `aria-label` of the `Breadcrumbs` root node as a `string`.
   *
   * @optional
   * @type string
   */
  "aria-label"?: BreadcrumbsProps["aria-label"]

  /**
   * The breadcrumb children.
   *
   * @required
   * @type node
   */
  children: BreadcrumbsProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * See [Material Breadcrumbs CSS API](https://material-ui.com/api/breadcrumbs/#css) for more details.
   *
   * @optional
   * @see https://material-ui.com/api/breadcrumbs/#css
   * @type object
   */
  classes?: BreadcrumbsProps["classes"]

  /**
   * The component used for the root node.
   *
   * Either a `string` to use a DOM element or a component.
   * By default, it maps the element to the `nav` element.
   *
   * @default "nav"
   * @optional
   * @type element
   */
  component?: React.ReactElement

  /**
   * Override the default label for the expand button.
   *
   * For localization purposes, you can use the provided [translations](https://material-ui.com/guides/localization/).
   *
   * @default "Show path"
   * @optional
   * @see https://material-ui.com/guides/localization/
   * @type string
   */
  expandText?: BreadcrumbsProps["expandText"]

  /**
   * If max items is exceeded, the number of items to show after the ellipsis.
   *
   * @default 1
   * @optional
   * @type number
   */
  itemsAfterCollapse?: BreadcrumbsProps["itemsAfterCollapse"]

  /**
   * If max items is exceeded, the number of items to show before the ellipsis.
   *
   * @default 1
   * @optional
   * @type number
   */
  itemsBeforeCollapse?: BreadcrumbsProps["itemsBeforeCollapse"]

  /**
   * Specifies the maximum number of breadcrumbs to display.
   *
   * When there are more than the maximum number,
   * only the first `itemsBeforeCollapse` and last `itemsAfterCollapse` will be shown, with an ellipsis in between.
   *
   * @default 8
   * @optional
   * @type number
   */
  maxItems?: BreadcrumbsProps["maxItems"]

  /**
   * Custom separator node.
   *
   * @default "/"
   * @optional
   * @type node
   */
  separator?: BreadcrumbsProps["separator"]
}

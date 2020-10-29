import { CollapseProps } from "@material-ui/core/Collapse";

export interface ICollapseProps extends CollapseProps {

  /**
   * The content of the component.
   *
   * @optional
   * @type node
   */
  children?: CollapseProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * @optional
   * @type object
   */
  classes?: CollapseProps["classes"]

  /**
   * The height of the container when collapsed.
   *
   * @default "0px"
   * @optional
   * @todo add support to size tokens
   * @type string | number
   */
  collapsedHeight?: CollapseProps["collapsedHeight"]

  /**
   * The component used for the root node. Either a string to use a DOM element or a component.
   *
   * @default "div"
   * @optional
   * @type element
   */
  component?: CollapseProps["component"]

  /**
   * If `true`, the component will transition in.
   *
   * @optional
   * @type bool
   */
  in?: CollapseProps["in"]

  /**
   * The duration for the transition, in milliseconds.
   *
   * You may specify a single timeout for all transitions, or individually with an object:
   *
   * ```
   * { enter?: number, exit?: number }
   * ```
   *
   * Set to `auto` to automatically calculate transition time based on height.
   *
   * Defaults to `duration.standard`.
   *
   * @type number | object | "auto"
   */
  timeout?: CollapseProps["timeout"]
}

import {
  AccordionActionsProps,
} from "@material-ui/core/AccordionActions";

export interface IExpansionPanelActionsProps extends AccordionActionsProps {

  /**
   * The content of the component.
   *
   * @optional
   * @type node
   */
  children?: AccordionActionsProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * See the [CSS API](https://material-ui.com/api/expansion-panel-actions/#css) for more details.
   *
   * @optional
   * @see https://material-ui.com/api/expansion-panel-actions/#css
   * @type object
   */
  classes?: AccordionActionsProps["classes"]

  /**
   * If `true`, the actions do not have additional margin.
   *
   * @optional
   * @default false
   * @type bool
   */
  disableSpacing?: AccordionActionsProps["disableSpacing"]
}

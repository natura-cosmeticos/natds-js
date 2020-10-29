import { AccordionSummaryProps } from "@material-ui/core/AccordionSummary";

export interface IExpansionPanelSummaryProps extends AccordionSummaryProps {

  /**
   * The content of the component.
   *
   * @optional
   * @type node
   */
  children?: AccordionSummaryProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * See the [CSS API](https://material-ui.com/api/expansion-panel-summary/#css) for more details.
   *
   * @optional
   * @see https://material-ui.com/api/expansion-panel-summary/#css
   * @type object
   */
  classes?: AccordionSummaryProps["classes"]

  /**
   * The icon to display as the expand indicator.
   *
   * @optional
   * @type node
   */
  expandIcon?: AccordionSummaryProps["expandIcon"]

  /**
   * Props applied to the `IconButton` element wrapping the expand icon.
   *
   * @optional
   * @type object
   */
  IconButtonProps?: AccordionSummaryProps["IconButtonProps"]
}

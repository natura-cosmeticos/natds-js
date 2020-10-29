import { AccordionDetailsProps } from "@material-ui/core/AccordionDetails";

export interface IExpansionPanelDetailsProps extends AccordionDetailsProps {

  /**
   * The content of the component.
   *
   * @optional
   * @type node
   */
  children?: AccordionDetailsProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * See the [CSS API](https://material-ui.com/api/expansion-panel-details/#css) for more details.
   *
   * @optional
   * @see https://material-ui.com/api/expansion-panel-details/#css
   * @type object
   */
  classes?: AccordionDetailsProps["classes"]
}

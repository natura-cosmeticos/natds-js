import { AccordionProps } from "@material-ui/core/Accordion";

export interface IExpansionPanelProps extends AccordionProps {

  /**
   * The content of the expansion panel.
   *
   * *All* of children must be `ExpansionPanelActions`, `ExpansionPanelDetails` or `ExpansionPanelSummary` components.
   *
   * Otherwise, you may receive the following error message:
   *
   * `TypeError: Cannot read property 'props' of undefined at Accordion`
   *
   * @required
   * @type node
   */
  children: AccordionProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * See the [CSS API](https://material-ui.com/api/expansion-panel/#css) for more details.
   *
   * @optional
   * @see https://material-ui.com/api/expansion-panel/#css
   * @type object
   */
  classes?: AccordionProps["classes"]

  /**
   * If `true`, expands the panel by default.
   *
   * @default false
   * @optional
   * @type bool
   */
  defaultExpanded?: AccordionProps["defaultExpanded"]

  /**
   * If `true`, the panel will be displayed in a disabled state.
   *
   * @default false
   * @optional
   * @type bool
   */
  disabled?: AccordionProps["disabled"]

  /**
   * If `true`, expands the panel, otherwise collapse it. Setting this prop enables control over the panel.
   *
   * @optional
   * @type bool
   */
  expanded?: AccordionProps["expanded"]

  /**
   * Callback fired when the expand/collapse state is changed.
   *
   * @optional
   * @param {object} event The event source of the callback.
   * @param {boolean} expanded The expanded state of the panel.
   * @returns void
   * @type func
   */
  onChange?: AccordionProps["onChange"]

  /**
   * The component used for the collapse effect.
   * Follow this guide to learn more about the requirements for this component.
   *
   * Default to `Collapse`.
   *
   * @type element
   */
  TransitionComponent?: AccordionProps["TransitionComponent"]

  /**
   * Props applied to the Transition element.
   *
   * Default to `Collapse`.
   *
   * @type object
   */
  TransitionProps?: AccordionProps["TransitionProps"]
}

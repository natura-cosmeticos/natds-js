import * as React from "react";
import MaterialCheckbox, { CheckboxProps as ICheckboxProps } from "@material-ui/core/Checkbox";

export { ICheckboxProps } from "./Checkbox.props";

/**
 * For more advanced usages, check [Material UI Checkbox docs](https://material-ui.com/components/checkboxes/)
 *
 * ## Importing
 *
 * ```
 * import { Checkbox } from '@naturacosmeticos/natds-web';
 * ```
 */
export const Checkbox = React.forwardRef<HTMLButtonElement, ICheckboxProps>((
  props: ICheckboxProps, ref,
) => {

  const { indeterminateIcon, ...otherProps } = props;

  /**
   * @todo adopt default indeterminate icon from `natds-icons`
   */
  // const defaultIndeterminateIcon = <Icon name={"filled-toggle-indeterminatecheckbox"} />;

  return <MaterialCheckbox
    indeterminateIcon={indeterminateIcon}
    ref={ref}
    {...otherProps}
  />;
});

Checkbox.displayName = "Checkbox";

export default Checkbox;

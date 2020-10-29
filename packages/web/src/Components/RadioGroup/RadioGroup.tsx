import * as React from "react";
import MaterialRadioGroup from "@material-ui/core/RadioGroup";
import { IRadioGroupProps } from "./RadioGroup.props";

/**
 * `RadioGroup` is a helpful wrapper used to group `Radio` components that provides an easier API,
 * and proper keyboard accessibility to the group.
 */
export const RadioGroup = React.forwardRef<unknown, IRadioGroupProps>(
  (props: IRadioGroupProps, ref) => <MaterialRadioGroup {...props} ref={ref} />,
);
RadioGroup.displayName = "RadioGroup";

export default RadioGroup;

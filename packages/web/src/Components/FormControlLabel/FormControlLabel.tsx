import * as React from "react";
import MaterialFormControlLabel from "@material-ui/core/FormControlLabel";
import { IFormControlLabelProps } from "./FormControlLabel.props";

export { IFormControlLabelProps } from "./FormControlLabel.props";

export const FormControlLabel = React.forwardRef<unknown, IFormControlLabelProps>(
  (props: IFormControlLabelProps, ref) => {
    const { control, label, ...otherProps } = props;

    return <MaterialFormControlLabel control={control} label={label} {...otherProps} ref={ref} />;
  },
);
FormControlLabel.displayName = "FormControlLabel";

export default FormControlLabel;

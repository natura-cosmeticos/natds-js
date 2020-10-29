import MaterialFormControl from "@material-ui/core/FormControl";
import * as React from "react";
import { IFormControlProps } from "./FormControl.props";
import { useStyles } from "./FormControl.styles";

/**
 * Provides context such as filled/focused/error/required for form inputs.
 *
 * Relying on the context provides high flexibility and ensures that the state always stays consistent across
 * the children of the `FormControl`. This context is used by the following components:
 *
 * * `FormLabel`
 * * `FormHelperText`
 * * `Input` (from Material UI)
 * * `InputLabel`
 *
 * ⚠️ Only one input can be used within a `FormControl`.
 *
 * ## Importing
 *
 * ```
 * import { FormControl } from "@naturacosmeticos/natds-web";
 * ```
 */
export const FormControl = React.forwardRef<HTMLDivElement, IFormControlProps>(
  (props: IFormControlProps, ref) => {
    const classes = useStyles();

    return <MaterialFormControl {...props} classes={classes} ref={ref} />;
  },
);
FormControl.displayName = "FormControl";

export default FormControl;

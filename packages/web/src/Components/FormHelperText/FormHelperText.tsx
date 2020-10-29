import MaterialFormHelperText from "@material-ui/core/FormHelperText";
import * as React from "react";
import { IFormHelperTextProps } from "./FormHelperText.props";
import useStyles from "./FormHelperText.styles";

export { IFormHelperTextProps } from "./FormHelperText.props";

export const FormHelperText = React.forwardRef<HTMLParagraphElement, IFormHelperTextProps>(
  (props: IFormHelperTextProps, ref) => {
    const { state, ...otherProps } = props;
    const classes = useStyles({ state });

    return <MaterialFormHelperText
      classes={classes}
      ref={ref}
      {...otherProps}
    />;
  },
);
FormHelperText.displayName = "FormHelperText";

export default FormHelperText;

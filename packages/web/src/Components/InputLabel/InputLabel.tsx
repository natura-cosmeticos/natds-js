import * as React from "react";
import MaterialInputLabel from "@material-ui/core/InputLabel";
import { IInputLabelProps } from "./InputLabel.props";
import useStyles from "./InputLabel.styles";

export { IInputLabelProps } from "./InputLabel.props";

export const InputLabel = React.forwardRef<HTMLLabelElement, IInputLabelProps>(
  (props: IInputLabelProps, ref) => {
    const { state, ...otherProps } = props;
    const classes = useStyles({ state });

    return <MaterialInputLabel
      classes={classes}
      shrink={true}
      ref={ref}
      {...otherProps}
    />;
  },
);

InputLabel.displayName = "InputLabel";

export default InputLabel;

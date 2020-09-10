import * as React from "react";

import MaterialFab from "@material-ui/core/Fab";
import { FabColor, IFabProps, MaterialFabColor } from "./Fab.props";
import colors from "./__fixtures__/colors";
import { useStyles } from "./Fab.styles";
import { getColorProp } from "./getColorProp";

export const defaultProps = {
  color: colors.primary,
  disabled: false,
};

export const Fab = React.forwardRef<unknown, IFabProps>(
  (props: IFabProps,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: any,
  ) => {
    const {
      color,

      /**
       * @deprecated `disabled` property was deprecated since version 0.19 and will be removed at 1.0.
       * The FAB promotes action, and should not be displayed in a disabled state.
       * If you want to present a FAB that does not perform an action, you should also present an explanation to the user.
       */
      disabled,
      ...otherProps
    } = props;

    const classes = useStyles();

    return <MaterialFab
      classes={classes}
      color={getColorProp({ color: color as FabColor }) as MaterialFabColor}
      disabled={disabled}
      ref={ref}
      {...otherProps}/>;
  },
);
Fab.displayName = "Fab";
Fab.defaultProps = defaultProps;

export default Fab;

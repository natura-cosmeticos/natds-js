import * as React from "react";
import * as PropTypes from "prop-types";
import MaterialAppBar from "@material-ui/core/AppBar";
import { IAppBarProps } from "./AppBar.props";
import useStyles from "./AppBar.styles";

const getElevation: (elevation?: number) => (number) = (elevation?: number) => {
  const NO_ELEVATION = 0;
  const DEFAULT_ELEVATION = 2;

  if (!elevation && elevation !== NO_ELEVATION) {
    return DEFAULT_ELEVATION;
  }

  return elevation;
};

/**
 * By default, an `AppBar` does not include icons or any additional elements.<br />
 * You are free to add the components you want to assemble your `AppBar`.
 *
 * For more advanced usages, check [Material UI AppBar docs](https://material-ui.com/components/app-bar/).
 */
export const AppBar = React.forwardRef<unknown, IAppBarProps>(
  (
    props: IAppBarProps,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: any,
  ) => {

    const customClasses = useStyles();
    const { classes, elevation } = props;

    return <MaterialAppBar
      {...props}
      classes={{
        ...customClasses,
        ...classes,
      }}
      elevation={getElevation(elevation)}
      ref={ref}
    />;

  },
);

AppBar.displayName = "AppBar";

AppBar.propTypes = {
  children: PropTypes.node,
};

export default AppBar;

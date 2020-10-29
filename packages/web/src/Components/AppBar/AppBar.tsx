import * as React from "react";
import MaterialAppBar from "@material-ui/core/AppBar";
import { IAppBarProps } from "./AppBar.props";
import { useStyles } from "./AppBar.styles";

/**
 * By default, an `AppBar` does not include icons or any additional elements.<br />
 * You are free to add the components you want to assemble your `AppBar`.
 *
 * For more advanced usages, check [Material UI AppBar docs](https://material-ui.com/components/app-bar/).
 *
 * ## Importing
 *
 * ```
 * import { AppBar } from '@naturacosmeticos/natds-web';
 * ```
 *
 * @see https://material-ui.com/components/app-bar/
 *
 */
export const AppBar = React.forwardRef<unknown, IAppBarProps>(
  (
    props: IAppBarProps, ref,
  ) => {

    const customClasses = useStyles();
    const { classes, elevation } = props;

    const getElevation: () => (number) = () => {
      const NO_ELEVATION = 0;
      const DEFAULT_ELEVATION = 2;

      if (!elevation && elevation !== NO_ELEVATION) {
        return DEFAULT_ELEVATION;
      }

      return elevation;
    };

    return <MaterialAppBar
      {...props}
      classes={{
        ...customClasses,
        ...classes,
      }}
      elevation={getElevation()}
      ref={ref}
    />;

  },
);

AppBar.displayName = "AppBar";

export default AppBar;

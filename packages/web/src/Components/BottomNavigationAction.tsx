import React, { FunctionComponent, forwardRef } from "react";
import MaterialBottomNavigationAction, { BottomNavigationActionProps } from "@material-ui/core/BottomNavigationAction";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import { IThemeWeb } from "../Themes";
import { getDefaultTheme } from "../hooks/useDefaultTheme";

export interface IBottomNavigationActionProps extends BottomNavigationActionProps {

  /**
   * @optional
   */
  theme?: IThemeWeb | unknown;
}

export const BottomNavigationAction: FunctionComponent<IBottomNavigationActionProps> = forwardRef((
  props: IBottomNavigationActionProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => {
  const {
      theme: providerTheme,
    } = props,

    theme = React.useMemo(() => getDefaultTheme(providerTheme), [providerTheme]),

    useStyles = React.useMemo(() => {

      /**
       * @todo fix(web): TS2571 - Object is of type 'unknown'.
       */
      // @ts-ignore
      const { text } = theme.palette;

      /**
       * @todo fix(web): TS2339 - Property 'typography' does not exist on type 'unknown'.
       */
      const { typography: { caption } } = theme;

      return makeStyles({
        label: {
          "&$selected": {
            fontSize: caption.fontSize,
          },
        },
        selected: {
          color: text.primary,
        },
      });
    }, [theme]),

    classes = useStyles();

  return <MaterialBottomNavigationAction {...props} classes={classes} ref={ref} />;
});

BottomNavigationAction.displayName = "BottomNavigationAction";

export default withTheme(BottomNavigationAction);

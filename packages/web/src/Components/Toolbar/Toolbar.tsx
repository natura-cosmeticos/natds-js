import * as React from "react";
import MaterialToolbar from "@material-ui/core/Toolbar";
import clsx from "clsx";
import { IToolbarProps } from "./Toolbar.props";
import { useStyles } from "./Toolbar.styles";
import { getVariantForMaterial } from "./getVariantForMaterial";

export const Toolbar = React.forwardRef<unknown, IToolbarProps>(
  (props: IToolbarProps,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: any) => {
    const { className, variant, ...other } = props;

    const variantForMaterial = getVariantForMaterial({ variant });
    const classes = useStyles();

    const classNames = clsx(
      className,
      variant === "prominent" && classes.prominent,
    );

    return <MaterialToolbar
      className={classNames}
      ref={ref}
      variant={variantForMaterial}
      {...other}
    />;
  },
);

Toolbar.displayName = "Toolbar";

export default Toolbar;

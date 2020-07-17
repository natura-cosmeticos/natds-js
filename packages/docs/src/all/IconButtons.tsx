import * as React from "react";
import { IconButton, Icon } from "@naturacosmeticos/natds-web";
import { useStyles } from "./styles";

const WrappedIconButton = (props: any) => <IconButton
  color={props.color}
  size="medium"
  children={<Icon size="tiny" name="outlined-social-network" />}
/>;

export const WrappedIconButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <WrappedIconButton color="default" />
      <WrappedIconButton color="primary" />
      <WrappedIconButton color="secondary" />
    </div>
  );
};

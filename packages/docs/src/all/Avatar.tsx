import * as React from "react";
import { Avatar } from "@naturacosmeticos/natds-web";
import { useStyles } from "./styles";

export const WrappedAvatar = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Avatar color="primary" size="huge">MS</Avatar>
    </div>
  );
};

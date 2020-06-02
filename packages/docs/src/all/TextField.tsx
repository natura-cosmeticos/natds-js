import * as React from "react";
import { TextField } from "@naturacosmeticos/natds-web";
import { useStyles } from "./styles";

export const WrappedTextField = () => {
  const classes = useStyles();

  return (
    <div className={`${classes.container} ${classes.textField}`}>
      <TextField label="Label" helpText="Helper Text" id="text-field" type="text" placeholder="Placeholder"/>
    </div>
  );
};

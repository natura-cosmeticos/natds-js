import * as React from "react";
import { Button } from "@naturacosmeticos/natds-web";
import { useStyles } from "./styles";

export const WrappedButtons = () => {
  const classes = useStyles();

  return (
    <div className={`${classes.container} ${classes.buttonsContainer}`}>
      <Button color="primary" variant="contained">Contained</Button>
      <Button color="primary" variant="outlined">Outlined</Button>
      <Button color="primary" variant="text">Text</Button>
    </div>
  );
};

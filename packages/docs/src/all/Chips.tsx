import * as React from "react";
import { Chip, Icon } from "@naturacosmeticos/natds-web";
import { useStyles } from "./styles";

const WrappedChip = (props: any) => <Chip
  icon={<Icon name="filled-brand-naturarosacea" size="tiny" />}
  label="Chip"
  color={props.color}
  variant={props.variant}
  onDelete={() => {}}
  clickable
/>;

export const WrappedChips = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.chipContainer}>
        <WrappedChip color="default" variant="default" />
        <WrappedChip color="primary" variant="default" />
        <WrappedChip color="secondary" variant="default" />
      </div>
      <div className={classes.chipContainer}>
        <WrappedChip color="default" variant="outlined" />
        <WrappedChip color="primary" variant="outlined" />
        <WrappedChip color="secondary" variant="outlined"/>
      </div>
    </div>
  );
};

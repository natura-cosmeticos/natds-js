import * as React from "react";
import {
  text, number, boolean, select,
} from "@storybook/addon-knobs";
import { Paper, Typography } from "@naturacosmeticos/natds-web";
import { makeStyles } from "@material-ui/core/styles";

export const Interactive = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(3, 2),
    },
  }));
  const classes = useStyles();

  const variant: any = {
    elevation: "elevation",
    outlined: "outlined",
  };

  return (
    <Paper
      className={classes.root}
      elevation={number("Paper elevation", 3)}
      variant={select("Paper variant", variant, variant.elevation)}
      square={boolean("Paper square", false)}
    >
      <Typography variant="h5" component="h3">
        {text("Title Text", "This is a sheet of paper.")}
      </Typography>
      <Typography component="p">
        {text(
          "Body Text",
          "Paper can be used to build surface or other elements for your application.",
        )}
      </Typography>
    </Paper>
  );
};

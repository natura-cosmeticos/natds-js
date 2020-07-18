import * as React from "react";
import { Paper, Typography } from "@naturacosmeticos/natds-web";
import { makeStyles } from "@material-ui/core/styles";

const PaperWrapper = ({
  elevation,
  variant,
  square
}: {
  elevation?: any;
  variant?: any;
  square?: boolean;
}) => {
  const useStyles = makeStyles((theme) => ({
    "root": {
      "padding": theme.spacing(3, 2)
    }
  }));
  const classes = useStyles();

  return (
    <Paper
      className={classes.root}
      elevation={elevation}
      variant={variant}
      square={square}
    >
      <Typography variant="h5" component="h3">
        This is a sheet of paper.
      </Typography>
      <Typography component="p">
        Paper can be used to build surface or other elements for your
        application.
      </Typography>
    </Paper>
  );
};

export const elevations = [
  {
    "title": "0",
    "component": <PaperWrapper elevation={0} />
  },
  {
    "title": "default",
    "component": <PaperWrapper />
  },
  {
    "title": "3",
    "component": <PaperWrapper elevation={3} />
  }
];

export const variants = [
  {
    "title": "elevation",
    "component": <PaperWrapper variant="elevation" />
  },
  {
    "title": "outlined",
    "component": <PaperWrapper variant="outlined" />
  },
  {
    "title": "outlined square",
    "component": <PaperWrapper variant="outlined" square />
  }
];

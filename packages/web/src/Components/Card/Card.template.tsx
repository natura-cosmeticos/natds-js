import * as React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import { Story } from "@storybook/react";
import Button from "../Button";
import Typography from "../Typography";
import { Card, ICardProps } from "./index";

const useStyles = makeStyles(
  createStyles({
    card: {
      padding: 16,
      maxWidth: 328,
    },
    body: {
      margin: "16px 0",
    },
  }),
  { name: "CardDemo" }
);

const CardTemplate: Story<ICardProps> = (args: ICardProps) => {
  const classes = useStyles();

  return (
    <Card {...args} className={classes.card}>
      <Typography variant="overline">overline</Typography>
      <Typography variant="h6">Header 6</Typography>
      <Typography variant="caption">Caption</Typography>
      <Typography variant="body2" className={classes.body}>
        This is an example of text using the body2 variant of Typography
        component
      </Typography>
      <Button variant="contained" color="primary">
        Default
      </Button>
    </Card>
  );
};

export default CardTemplate;

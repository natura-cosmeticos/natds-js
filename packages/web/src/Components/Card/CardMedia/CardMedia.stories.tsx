import * as React from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import { Story } from "@storybook/react";

import { ICardMediaProps } from "./CardMedia.props";
import { Card } from "../Card";
import { Typography } from "../../Typography";

const CardMedia: React.ForwardRefExoticComponent<ICardMediaProps> = React.lazy(() => import("./CardMedia"));

CardMedia.displayName = "CardMedia";

export default {
  component: CardMedia,
  title: "Components/Card/Card Media",
};

const useStyles = makeStyles(
  createStyles({
    card: {
      maxWidth: 328,
    },
    cardContent: {
      padding: 16,
    },
  }),
  { name: "CardMediaDemo" },
);

const Template: Story<ICardMediaProps> = (args: ICardMediaProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia {...args} />
      <div className={classes.cardContent}>
        <Typography variant="h6">Header 6</Typography>
        <Typography>
          This is an example of Card component using a CardMedia component in
          the top
        </Typography>
      </div>
    </Card>
  );
};

export const Playground: Story<ICardMediaProps> = Template.bind({});

Playground.args = {
  image: "https://zeroheight.com/uploads/CKp-xkMzUziuVtBy4yXxyg.jpg",
  alt: "a lot of green leaves",
  style: { height: 184 },
};

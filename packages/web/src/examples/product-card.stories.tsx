/* eslint-disable max-lines-per-function */
import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { makeStyles, createStyles } from "@material-ui/core";
import { Card } from "../Components/Card/Card";
import { Image } from "../Components/Image";
import Typography from "../Components/Typography";
import Button from "../Components/Button";

export default {
  title: "Examples/Product Card",
} as Meta;

const useStyles = makeStyles(
  createStyles({
    card: {
      maxWidth: 328,
    },
    cardContent: {
      padding: "24px 16px 16px",
      textAlign: "center",
    },
    cardTextDecoration: {
      textDecoration: "line-through",
    },
    cardButton: {
      marginTop: 24,
    },
  }),
  { name: "CardDemo" }
);

const imageURL =
  "https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web@latest/dist/assets/product-empty-256x256.png";

const Template: Story = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card} square={true}>
      <Image src={imageURL} alt="green leaves" width={328} />
      <div className={classes.cardContent}>
        <Typography variant="overline" color="textSecondary">
          Overline Product
        </Typography>
        <Typography variant="h5" paragraph={true}>
          Header 5 Product
        </Typography>
        <Typography
          color="textSecondary"
          className={classes.cardTextDecoration}
        >
          Body 1 Product
        </Typography>
        <Typography variant="h4">R$ 99,00</Typography>
        <div className={classes.cardButton}>
          <Button color="primary" variant="contained" fullWidth={true}>
            Default
          </Button>
        </div>
      </div>
    </Card>
  );
};

export const ProductCard: Story = Template.bind({});

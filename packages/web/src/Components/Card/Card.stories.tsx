import { Card } from "./Card";
import { argTypes } from "./Card.argTypes";
import CardTemplate from "./Card.template";
import { CardMedia } from "./CardMedia/CardMedia";

export default {
  argTypes,
  component: Card,
  subcomponents: { CardMedia },
  title: "Components/Card",
};

Card.displayName = "Card";

export const Playground = CardTemplate.bind({});

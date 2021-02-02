import { Card } from "./Card";
import { argTypes } from "./Card.argTypes";
import CardTemplate from "./Card.template";

export default {
  argTypes,
  component: Card,
  title: "Components/Card",
};

export const Playground = CardTemplate.bind({});
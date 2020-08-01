import * as React from "react";
import { parameters } from './stories/parameters';
import withJest from "../../../.storybook/decorators/jest/jest";
import withContainer from "../../../.storybook/decorators/container";

export default {
  decorators: [withJest(), withContainer],
  parameters,
  title: 'Playground|Fab'
}

export { Interactive } from "./Playground.story"

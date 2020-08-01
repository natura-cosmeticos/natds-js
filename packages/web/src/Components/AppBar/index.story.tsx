import * as React from "react";
import withJest from "../../../.storybook/decorators/jest/jest";
import withContainer from "../../../.storybook/decorators/container";
import { AppBar } from ".";
import {parameters} from "./parameters";

export default {
  title: "Playground|AppBar",
  component: AppBar,
  decorators: [
    withJest(), withContainer,
  ],
  parameters
};

export { Interactive } from "./Playground.story"

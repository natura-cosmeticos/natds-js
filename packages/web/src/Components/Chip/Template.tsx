import { Story } from "@storybook/react";
import * as React from "react";
import { IChipProps } from "./Chip.props";
import { Chip } from "./Chip";
import { variants } from "./__fixtures__/variants";

export const Template : Story<IChipProps> = (args: IChipProps) => <Chip {...args} />;

export const TemplateWithVariants : Story<IChipProps> = (args: IChipProps) => (<div>
  <Chip {...args} variant={variants.default} />
  {" "}
  <Chip {...args} variant={variants.outlined} />
</div>);

export default Template;

import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Intro } from "./Intro";
import { IntroDetails } from "./IntroDetails";
import { IIntroProps } from "./Intro.props";
import { IntroTitle } from "./IntroTitle";
import { IntroContainer } from "./IntroContainer";
import { colors } from "./__fixtures__/colors";
import { variants } from "./__fixtures__/variants";
import { Icon } from "../Icon";
import { SmallAddIcon } from "../Icon/Icon.stories";
import { argTypes } from "./Intro.argTypes";

export default {
  argTypes,
  component: Intro,
  subcomponents: { IntroDetails, IntroContainer, IntroTitle },
  title: "Components/Intro",
} as Meta;

const Template : Story<IIntroProps> = (args: IIntroProps) => <Intro {...args} />;

export const Playground : Story<IIntroProps> = Template.bind({});
Playground.args = {
  detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut quam non libero placerat placerat id vel",
  detailColor: colors.textPrimary,
  detailVariant: variants.body2,

  /**
   * @todo migrate to <Container /> or something using `natds-themes` tokens
   */
  style: { width: "600px" },
  title: "Heading",
  titleColor: colors.textPrimary,
  titleVariant: variants.subtitle1,
};

export const WithIcon : Story<IIntroProps> = Template.bind({});
WithIcon.args = {
  ...Playground.args,
  title: <>
    <Icon name={"outlined-action-add"} {...SmallAddIcon.args} />
    {Playground.args.title}
  </>,
};

export const TitleWithPrimaryColor : Story<IIntroProps> = Template.bind({});
TitleWithPrimaryColor.args = {
  ...Playground.args,
  titleColor: colors.primary,
};

export const DetailWithBody1Variant : Story<IIntroProps> = Template.bind({});
DetailWithBody1Variant.args = {
  ...Playground.args,
  detailVariant: variants.body1,
};

export const DetailWithPrimaryColor : Story<IIntroProps> = Template.bind({});
DetailWithPrimaryColor.args = {
  ...Playground.args,
  detailColor: colors.primary,
};

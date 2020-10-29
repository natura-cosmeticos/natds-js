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
import { SmallIcon } from "../Icon/Icon.stories";
import { argTypes } from "./Intro.argTypes";
import { Container } from "../Container";
import { Fluid } from "../Container/Container.stories";

export default {
  argTypes,
  component: Intro,
  subcomponents: { IntroDetails, IntroContainer, IntroTitle },
  title: "Components/Intro",
} as Meta;

const Template : Story<IIntroProps> = (args: IIntroProps) => (
  <Container {...Fluid.args}><Intro {...args} /></Container>
);

export const Playground : Story<IIntroProps> = Template.bind({});
Playground.args = {
  detail: "This is a Intro detail long text. You can change this text, as well as its color and variant at Controls.",
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
    <Icon {...SmallIcon.args} name={"outlined-action-add"} />
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

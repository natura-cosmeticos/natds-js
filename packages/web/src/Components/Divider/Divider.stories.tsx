import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Divider as component } from "./Divider";
import { IDividerProps } from "./Divider.props";
import { Container } from "../Container";
import { FluidWithSmMaxSize } from "../Container/Container.stories";
import { Spacing } from "../Spacing";
import { CaptionWithSecondaryText } from "../Typography/Typography.stories";
import { Typography } from "../Typography";
import { SemiXMarginY } from "../Spacing/Spacing.margin.stories";

const Divider:React.ForwardRefExoticComponent<IDividerProps> = React.lazy(() => import("../Divider"));

export default {
  component,
  title: "Components/Divider",
} as Meta;

const useStyles = makeStyles(createStyles({
  container: {
    borderColor: "#FF00FF1A",
    borderStyle: "solid",
    borderWidth: 1,
  },
}), { name: "DividerDemo" });

const Template : Story<IDividerProps> = (args: IDividerProps) => (
  <Container {...FluidWithSmMaxSize.args}>
    <Spacing className={useStyles().container} {...SemiXMarginY.args}>
      <Typography {...CaptionWithSecondaryText.args}>This is a content before divider</Typography>
      <Divider {...args} />
      <Typography {...CaptionWithSecondaryText.args}>This is a content after divider</Typography>
    </Spacing>
  </Container>
);

export const Playground : Story<IDividerProps> = Template.bind({});
Playground.args = {
  variant: "fullWidth",
};

export const FullWidthVariant : Story<IDividerProps> = Template.bind({});
FullWidthVariant.args = {
  variant: "fullWidth",
};

export const InsetVariant : Story<IDividerProps> = Template.bind({});
InsetVariant.args = {
  variant: "inset",
};

export const MiddleVariant : Story<IDividerProps> = Template.bind({});
MiddleVariant.args = {
  variant: "middle",
};

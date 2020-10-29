import { Story } from "@storybook/react";
import * as React from "react";
import { IButtonGroupProps } from "./ButtonGroup.props";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { IconButton } from "../IconButton";
import { colors } from "./__fixtures__/colors";
import { Typography } from "../Typography";
import { Caption } from "../Typography/Typography.stories";
import { GridContainer } from "../GridContainer";
import { GridItem } from "../GridItem";
import { Spacing3 } from "../GridContainer/GridContainer.stories";
import { variants } from "./__fixtures__/variants";
import { TinyIcon } from "../Icon/Icon.stories";

export const Template : Story<IButtonGroupProps> = (args: IButtonGroupProps) => (
  <ButtonGroup {...args}>
    <Button>Add</Button>
    <Button>Edit</Button>
    <Button>Delete</Button>
  </ButtonGroup>
);

export const TemplateWithIcons : Story<IButtonGroupProps> = (args: IButtonGroupProps) => (
  <ButtonGroup {...args}>
    <Button aria-label={"Add"}>
      <Icon {...TinyIcon.args} name={"filled-action-add"} />
    </Button>
    <Button aria-label={"Edit"}>
      <Icon {...TinyIcon.args} name={"outlined-action-edit"} />
    </Button>
    <Button aria-label={"Delete"}>
      <Icon {...TinyIcon.args} name={"outlined-action-delete"} />
    </Button>
  </ButtonGroup>
);

export const TemplateWithIconButtons : Story<IButtonGroupProps> = (args: IButtonGroupProps) => (
  <ButtonGroup {...args}>
    <IconButton aria-label={"Add"}>
      <Icon {...TinyIcon.args} name={"filled-action-add"} />
    </IconButton>,
    <IconButton aria-label={"Edit"}>
      <Icon {...TinyIcon.args} name={"outlined-action-edit"} />
    </IconButton>,
    <IconButton aria-label={"Delete"}>
      <Icon {...TinyIcon.args} name={"outlined-action-delete"} />
    </IconButton>
  </ButtonGroup>
);

export const TemplateWithColors : Story<IButtonGroupProps> = (args: IButtonGroupProps) => (
  <GridContainer {...Spacing3.args}>
    {Object.keys(colors).map((color: IButtonGroupProps["color"], index) => (
      <GridItem key={index}>
        <Typography component={"h4"} paragraph={true} {...Caption.args}>{color}</Typography>
        <ButtonGroup {...args} color={color}>
          <Button>Add</Button>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </ButtonGroup>
      </GridItem>
    ))}
  </GridContainer>
);

export const TemplateWithVariants : Story<IButtonGroupProps> = (args: IButtonGroupProps) => (
  <GridContainer {...Spacing3.args}>
    {Object.keys(variants).map((variant: IButtonGroupProps["variant"], index) => (
      <GridItem key={index}>
        <Typography component={"h4"} paragraph={true} {...Caption.args}>{variant}</Typography>
        <ButtonGroup {...args} variant={variant}>
          <Button>Add</Button>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </ButtonGroup>
      </GridItem>
    ))}
  </GridContainer>
);

export default Template;

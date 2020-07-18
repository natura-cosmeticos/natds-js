import React from "react";
import { Add, Delete, Edit } from "@material-ui/icons";
import {
  ButtonGroup,
  IButtonGroupProps,
  Button,
  IconButton,
} from "@naturacosmeticos/natds-web";

const SampleGroupButton = (props: IButtonGroupProps) => <ButtonGroup color="primary" variant="contained" size="medium" {...props}>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</ButtonGroup>;

export const variants = [
  {
    title: "Contained",
    component: <SampleGroupButton variant="contained" />,
  },
  {
    title: "Outlined",
    component: <SampleGroupButton variant="outlined" />,
  },
  {
    title: "Text",
    component: <SampleGroupButton variant="text" />,
  },
];

const contained = [
  {
    title: "Contained / Primary",
    component: <SampleGroupButton color="primary" variant="contained" />,
  },
  {
    title: "Contained / Secondary",
    component: <SampleGroupButton color="secondary" variant="contained" />,
  },
  {
    title: "Contained / Default",
    component: <SampleGroupButton color="default" variant="contained" />,
  },
];

const outlined = [
  {
    title: "Outlined / Primary",
    component: <SampleGroupButton color="primary" variant="outlined" />,
  },
  {
    title: "Outlined / Secondary",
    component: <SampleGroupButton color="secondary" variant="outlined" />,
  },
  {
    title: "Outlined / Default",
    component: <SampleGroupButton color="default" variant="outlined" />,
  },
];

const text = [
  {
    title: "Text / Primary",
    component: <SampleGroupButton color="primary" variant="text" />,
  },
  {
    title: "Text / Secondary",
    component: <SampleGroupButton color="secondary" variant="text" />,
  },
  {
    title: "Text / Default",
    component: <SampleGroupButton color="default" variant="text" />,
  },
];

export const colors = {
  contained,
  outlined,
  text,
};

export const sizes = [
  {
    title: "Small",
    component: <SampleGroupButton size="small" />,
  },
  {
    title: "Medium",
    component: <SampleGroupButton size="medium" />,
  },
  {
    title: "Large",
    component: <SampleGroupButton size="large" />,
  },
];

export const disabled = [
  {
    title: "Contained",
    component: <SampleGroupButton variant="contained" disabled />,
  },
  {
    title: "Outlined",
    component: <SampleGroupButton variant="outlined" disabled />,
  },
  {
    title: "Text",
    component: <SampleGroupButton variant="text" disabled />,
  },
];

export const icons = [
  {
    title: "Icon",
    component:
      <ButtonGroup>
        <Button children={<Add />} />
        <Button children={<Edit />} />
        <Button children={<Delete />} />
      </ButtonGroup>,

  },
  {
    title: "Icon Button",
    component:
      <ButtonGroup color="secondary" variant="text">
        <IconButton children={<Add />} />
        <IconButton children={<Edit />} />
        <IconButton children={<Delete />} />
      </ButtonGroup>,

  },
];

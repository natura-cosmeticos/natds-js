import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { FormControl } from "./FormControl";
import { IFormControlProps } from "./FormControl.props";
import { IFormHelperTextProps } from "../FormHelperText";
import { Playground as InputLabelPlayground } from "../InputLabel/InputLabel.stories";
import { Playground as FormHelperTextPlayground } from "../FormHelperText/FormHelperText.stories";
import { IInputLabelProps } from "../InputLabel";
import { Field } from "../Field";

const FormHelperText : React.ForwardRefExoticComponent<IFormHelperTextProps> = React.lazy(() => import("../FormHelperText"));
const InputLabel : React.ForwardRefExoticComponent<IInputLabelProps> = React.lazy(() => import("../InputLabel"));

FormHelperText.displayName = "FormHelperText";
InputLabel.displayName = "InputLabel";

export default {
  component: FormControl,
  subcomponents: { FormHelperText, InputLabel },
  title: "Utilities/Form Control",
} as Meta;

const Template : Story<IFormControlProps> = (args: IFormControlProps) => <FormControl {...args}>
  <InputLabel {...InputLabelPlayground.args} />
  {args.children}
  <FormHelperText {...FormHelperTextPlayground.args} />
</FormControl>;

export const Playground : Story<IFormControlProps> = Template.bind({});
Playground.args = {
  children: <Field id={"field"} />,
};

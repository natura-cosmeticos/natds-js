import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";

import { ITextFieldProps as TextFieldProps } from "./shared";

import Field from "./Field";
import InputStateHelpTextProvider, { IInputStateHelpTextProviderProps } from "../InputStateHelpTextProvider";

export type ITextFieldProps = TextFieldProps & IInputStateHelpTextProviderProps;

type ITextFieldPropsWithoutTheme = Omit<ITextFieldProps, "theme">;

export const TextField: FunctionComponent<ITextFieldPropsWithoutTheme> = forwardRef((props: ITextFieldProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any) => <InputStateHelpTextProvider {...props}>
  <Field {...props} ref={ref} />
</InputStateHelpTextProvider>);

TextField.displayName = "TextField";

export default withTheme(TextField);

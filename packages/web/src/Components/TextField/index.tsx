import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";

import { ITextFieldProps as TextFieldProps } from "./shared";

import Field from "./Field";
import InputStateHelpTextProvider, { IInputStateHelpTextProviderProps } from "../InputStateHelpTextProvider";

export type ITextFieldProps = TextFieldProps & IInputStateHelpTextProviderProps;

type ITextFieldPropsWithoutTheme = Omit<ITextFieldProps, "theme">;

export const TextField: FunctionComponent<ITextFieldPropsWithoutTheme> = forwardRef((props: ITextFieldProps, ref: any) => <InputStateHelpTextProvider {...props}>
  <Field {...props} ref={ref} />
</InputStateHelpTextProvider>);

export default withTheme(TextField);

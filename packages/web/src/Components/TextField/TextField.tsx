import * as React from "react";

import Field from "../Field";
import InputStateHelpTextProvider from "../InputStateHelpTextProvider";
import { ITextFieldProps } from "./TextField.props";

export { ITextFieldProps } from "./TextField.props";

/**
 * Some props passed to the `TextField` will be forwarded to the `input`/`textarea` element.
 *
 * ## Importing
 *
 * ```
 * import { TextField } from '@naturacosmeticos/natds-web';
 * ```
 */
export const TextField = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, ITextFieldProps>(
  (props: ITextFieldProps, ref) => <InputStateHelpTextProvider {...props}>
    <Field {...props} ref={ref} />
  </InputStateHelpTextProvider>,
);

TextField.displayName = "TextField";

export default TextField;

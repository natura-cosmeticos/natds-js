import * as React from "react";
import { IconName } from "@naturacosmeticos/natds-icons";
import { IInputStateHelpTextProviderProps } from "./InputStateHelpTextProvider.props";
import { FormHelperText } from "../FormHelperText";
import { InputLabel } from "../InputLabel";
import { FormControl } from "../FormControl";
import { Icon } from "../Icon";
import useStyles from "./InputStateHelpTextProvider.styles";

export { IInputStateHelpTextProviderProps } from "./InputStateHelpTextProvider.props";

// eslint-disable-next-line complexity
export const InputStateHelpTextProvider: React.FunctionComponent<IInputStateHelpTextProviderProps> = (props: IInputStateHelpTextProviderProps) => {
  const {
    id,
    label,
    helpText,
    required = false,
    disabled = false,
    state,
    className,
    children,
    readOnly = false,
  } = props;

  const content = label && required ? `${label} *` : label;

  let stateIconName: IconName = "filled-default-mockup";

  if (state === "error") {
    stateIconName = "outlined-alert-cancel";
  }

  if (state === "success") {
    stateIconName = "outlined-alert-check";
  }

  const { icon } = useStyles();

  return (
    <FormControl className={className}>
      {content
        && <InputLabel htmlFor={id} error={state === "error"} disabled={disabled} state={state}>
          {content}
        </InputLabel>
      }
      {children}
      {!readOnly && helpText
        && <FormHelperText disabled={disabled} error={state === "error"} state={state}>
          {state && <Icon className={icon} name={stateIconName} size={"micro"} />}
          {helpText}
        </FormHelperText>
      }
    </FormControl>
  );
};

export default InputStateHelpTextProvider;

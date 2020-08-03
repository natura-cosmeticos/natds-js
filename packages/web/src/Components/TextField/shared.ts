import {ITextFieldProps} from "./ITextFieldProps";
import {IStateTypes} from "./IStateTypes";

export {ITextFieldProps} from "./ITextFieldProps";

export const stateStyles = {
  default: {
    borderWidth: "0 0 0 1px",
    key: "hint",
    type: "text",
  },
  disabled: {
    borderWidth: "0 0 0 1px",
    key: "hint",
    type: "text",
  },
  error: {
    borderWidth: "0 0 0 2px",
    key: "main",
    type: "error",
  },
  filled: {
    borderWidth: "0 0 0 1px",
    key: "primary",
    type: "text",
  },
  focus: {
    borderWidth: "0 0 0 2px",
    key: "main",
    type: "primary",
  },
  hover: {
    borderWidth: "0 0 0 1px",
    key: "secondary",
    type: "text",
  },
  success: {
    borderWidth: "0 0 0 1px",
    key: "main",
    type: "success",
  },
};

const getState = ({disabled, state}: Pick<ITextFieldProps, "disabled" | "state">, initial: IStateTypes) => (disabled ? stateStyles.disabled : stateStyles[state || ""]) || initial;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-explicit-any
export const getProp = (namespace: string, type: string, key?: string) => ({theme}: { theme?: any }) => {
  const propNamespace = theme[namespace] || {},
    propType = propNamespace[type] || {};

  return key ? propType[key] : propType;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getColorByState = (initial: IStateTypes) => (props: ITextFieldProps) => {
  const {type, key} = getState(props, initial);

  return getProp("palette", type, key)(props);
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getBorderByState = (initial: IStateTypes) => (props: ITextFieldProps) => {
  const {type, key, borderWidth} = getState(props, initial);

  return `${getProp("palette", type, key)(props)} ${borderWidth}`;
};

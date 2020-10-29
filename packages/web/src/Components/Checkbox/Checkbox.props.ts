import { CheckboxProps } from "@material-ui/core";

export type CheckboxColor = "primary" | "secondary" | "default";
export type CheckboxEdge = CheckboxProps["edge"];
export type ICheckboxProps = Omit<CheckboxProps, "translate">

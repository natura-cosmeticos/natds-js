import { DividerProps } from "@material-ui/core/Divider";

export interface IDividerProps extends Omit<DividerProps, "translate"> {

  /**
   * The variant to use.
   *
   * @default "fullWidth"
   * @type "fullWidth" | "inset" | "middle"
   */
  variant?: "fullWidth" | "inset" | "middle"
}

import { ToolbarProps } from "@material-ui/core/Toolbar";

export type ToolbarVariant = "regular" | "dense" | "prominent"
export type MaterialToolbarVariant = Omit<ToolbarVariant, "prominent">;

export interface IToolbarProps extends Omit<ToolbarProps, "variant"> {

  /**
   * The variant to use.
   *
   * @since 0.19.0
   */
  variant?: ToolbarVariant;
}

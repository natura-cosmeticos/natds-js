import { FormHelperTextProps } from "@material-ui/core/FormHelperText";
import { State } from "../Input/Input.props";

export interface IFormHelperTextProps extends FormHelperTextProps {

  /**
   * @optional
   * @type "error" | "success" | undefined
   */
  state?: State
}

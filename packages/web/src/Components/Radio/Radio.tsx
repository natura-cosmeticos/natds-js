import * as React from "react";
import MaterialRadio from "@material-ui/core/Radio";

import { IRadioProps } from "./Radio.props";

export { IRadioProps } from "./Radio.props";

/**
 * For more advanced usages, check [Material UI Radio docs](https://material-ui.com/components/radio-buttons/)
 *
 * ## Importing
 *
 * ```
 * import { Radio } from "@naturacosmeticos/natds-web";
 * ```
 *
 * @see https://material-ui.com/components/radio-buttons/
 */
export const Radio = React.forwardRef<HTMLButtonElement, IRadioProps>((props: IRadioProps, ref) => (
  <MaterialRadio {...props} ref={ref} />
));

Radio.displayName = "Radio";

export default Radio;

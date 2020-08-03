import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialRadio, { RadioProps as IRadioProps } from "@material-ui/core/Radio";

export { RadioProps as IRadioProps } from "@material-ui/core/Radio";

export const Radio: FunctionComponent<Omit<IRadioProps, "translate">> = forwardRef((
  props: Omit<IRadioProps, "translate">,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialRadio {...props} ref={ref} />);

Radio.displayName = "Radio";

export default withTheme(Radio);

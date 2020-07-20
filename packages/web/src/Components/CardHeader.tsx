import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialCardHeader, {
  CardHeaderProps as ICardHeaderProps,
} from "@material-ui/core/CardHeader";

export { CardHeaderProps as ICardHeaderProps } from "@material-ui/core/CardHeader";

const CardHeader: FunctionComponent<ICardHeaderProps> = forwardRef((
  props: ICardHeaderProps,
  ref: any,
) => <MaterialCardHeader {...props} ref={ref} />);

export default withTheme(CardHeader);

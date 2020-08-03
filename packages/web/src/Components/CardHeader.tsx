import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialCardHeader, {
  CardHeaderProps as ICardHeaderProps,
} from "@material-ui/core/CardHeader";

export { CardHeaderProps as ICardHeaderProps } from "@material-ui/core/CardHeader";

const CardHeader: FunctionComponent<ICardHeaderProps> = forwardRef((
  props: ICardHeaderProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialCardHeader {...props} ref={ref} />);

CardHeader.displayName = "CardHeader";

export default withTheme(CardHeader);

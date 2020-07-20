import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialCardContent, {
  CardContentProps as ICardContentProps,
} from "@material-ui/core/CardContent";

export { CardContentProps as ICardContentProps } from "@material-ui/core/CardContent";

const CardContent: FunctionComponent<ICardContentProps> = forwardRef((
  props: ICardContentProps,
  ref: any,
) => <MaterialCardContent {...props} ref={ref} />);

export default withTheme(CardContent);

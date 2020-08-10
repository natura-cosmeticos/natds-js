import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialCardActionArea, {
  CardActionAreaProps as ICardActionAreaProps,
} from "@material-ui/core/CardActionArea";

export { CardActionAreaProps as ICardActionAreaProps } from "@material-ui/core/CardActionArea";

const CardActionArea: FunctionComponent<ICardActionAreaProps> = forwardRef((
  props: ICardActionAreaProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialCardActionArea {...props} ref={ref} />);

CardActionArea.displayName = "CardActionArea";

export default withTheme(CardActionArea);

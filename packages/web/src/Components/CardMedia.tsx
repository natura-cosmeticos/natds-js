import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialCardMedia, {
  CardMediaProps as ICardMediaProps,
} from "@material-ui/core/CardMedia";

export { CardMediaProps as ICardMediaProps } from "@material-ui/core/CardMedia";

const CardMedia: FunctionComponent<Omit<ICardMediaProps, "translate">> = forwardRef((
  props: Omit<ICardMediaProps, "translate">,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialCardMedia {...props} ref={ref} />);

CardMedia.displayName = "CardMedia";

export default withTheme(CardMedia);

import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialCard, { CardProps as ICardProps } from "@material-ui/core/Card";

export { CardProps as ICardProps } from "@material-ui/core/Card";

export const Card: FunctionComponent<ICardProps> = forwardRef((
  props: ICardProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialCard {...props} ref={ref} />);

Card.displayName = "Card";

export default withTheme(Card);

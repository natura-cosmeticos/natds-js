import * as React from "react";
import MaterialCardMedia from "@material-ui/core/CardMedia";
import { ICardMediaProps } from "./CardMedia.props";

/**
 * @deprecated `CardMedia` component will be deprecated soon.
 *
 */
export const CardMedia = React.forwardRef<HTMLDivElement, ICardMediaProps>(
  (props: ICardMediaProps, ref) => <MaterialCardMedia {...props} ref={ref} />,
);

CardMedia.displayName = "CardMedia";

export default CardMedia;

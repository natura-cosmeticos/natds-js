import * as React from "react";
import MaterialCardMedia from "@material-ui/core/CardMedia";
import { ICardMediaProps } from "./CardMedia.props";

/**
 * @deprecated `CardMedia` component will be deprecated soon.
 *
 * It doesn't make sense for Natura Design System that the library is an exact copy of everything that exists on MaterialUI.
 */
export const CardMedia = React.forwardRef<HTMLDivElement, ICardMediaProps>(
  (props: ICardMediaProps, ref) => <MaterialCardMedia {...props} ref={ref} />,
);

CardMedia.displayName = "CardMedia";

export default CardMedia;

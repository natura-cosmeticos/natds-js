import * as React from "react";
import MaterialCardMedia from "@material-ui/core/CardMedia";
import { ICardMediaProps } from "./CardMedia.props";

/**
 * ## Importing
 *
 * ```
 * import { CardMedia } from "@naturacosmeticos/natds-web";
 * ```
 */
export const CardMedia = React.forwardRef<HTMLDivElement, ICardMediaProps>(
  (props: ICardMediaProps, ref) => (
    <MaterialCardMedia {...props} ref={ref} />
  ),
);

CardMedia.displayName = "CardMedia";

export default CardMedia;

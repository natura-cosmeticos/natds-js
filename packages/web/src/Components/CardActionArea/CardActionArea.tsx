import * as React from "react";
import MaterialCardActionArea from "@material-ui/core/CardActionArea";
import { ICardActionAreaProps } from "./CardActionArea.props";

export { ICardActionAreaProps } from "./CardActionArea.props";

/**
 * ## Importing
 *
 * ```
 * import { CardActionArea } from "@naturacosmeticos/natds-web";
 * ```
 */
export const CardActionArea = React.forwardRef<HTMLButtonElement, ICardActionAreaProps>(
  (props: ICardActionAreaProps, ref: ICardActionAreaProps["ref"]) => (
    <MaterialCardActionArea {...props} ref={ref} />
  ),
);

CardActionArea.displayName = "CardActionArea";

export default CardActionArea;

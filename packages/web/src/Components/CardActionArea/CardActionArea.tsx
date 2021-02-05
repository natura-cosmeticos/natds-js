import * as React from "react";
import MaterialCardActionArea from "@material-ui/core/CardActionArea";
import { ICardActionAreaProps } from "./CardActionArea.props";

export { ICardActionAreaProps } from "./CardActionArea.props";

/**
 * @deprecated `CardActionArea` component will be deprecated soon
 *
 * It doesn't make sense for Natura Design System that the library is an exact copy of everything that exists on MaterialUI.
 */
export const CardActionArea = React.forwardRef<HTMLButtonElement, ICardActionAreaProps>(
  (props: ICardActionAreaProps, ref: ICardActionAreaProps["ref"]) => (
    <MaterialCardActionArea {...props} ref={ref} />
  ),
);

CardActionArea.displayName = "CardActionArea";

export default CardActionArea;

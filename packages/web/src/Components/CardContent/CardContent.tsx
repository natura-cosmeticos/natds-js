import * as React from "react";
import MaterialCardContent from "@material-ui/core/CardContent";
import { ICardContentProps } from "./CardContent.props";

/**
 * @deprecated `CardContent` component will be deprecated soon
 *
 * It doesn't make sense for Natura Design System that the library is an exact copy of everything that exists on MaterialUI.
 */
export const CardContent = React.forwardRef<HTMLDivElement, ICardContentProps>(
  (props: ICardContentProps, ref) => (
    <MaterialCardContent {...props} ref={ref} />
  ),
);

CardContent.displayName = "CardContent";

export default CardContent;

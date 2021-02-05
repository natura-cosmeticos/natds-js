import * as React from "react";
import MaterialCardHeader from "@material-ui/core/CardHeader";
import { ICardHeaderProps } from "./CardHeader.props";

/**
 * @deprecated `CardHeader` component will be deprecated soon
 *
 */
export const CardHeader = React.forwardRef<HTMLDivElement, ICardHeaderProps>(
  (props: ICardHeaderProps, ref: ICardHeaderProps["ref"]) => (
    <MaterialCardHeader {...props} ref={ref} />
  ),
);

CardHeader.displayName = "CardHeader";

export default CardHeader;

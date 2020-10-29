import * as React from "react";
import MaterialCardHeader from "@material-ui/core/CardHeader";
import { ICardHeaderProps } from "./CardHeader.props";

/**
 * ## Importing
 *
 * ```
 * import { CardHeader } from "@naturacosmeticos/natds-web";
 * ```
 */
export const CardHeader = React.forwardRef<HTMLDivElement, ICardHeaderProps>(
  (props: ICardHeaderProps, ref: ICardHeaderProps["ref"]) => (
    <MaterialCardHeader {...props} ref={ref} />
  ),
);

CardHeader.displayName = "CardHeader";

export default CardHeader;

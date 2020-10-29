import * as React from "react";
import MaterialCardContent from "@material-ui/core/CardContent";
import { ICardContentProps } from "./CardContent.props";

/**
 * ## Importing
 *
 * ```
 * import { CardContent } from "@naturacosmeticos/natds-web";
 * ```
 */
export const CardContent = React.forwardRef<HTMLDivElement, ICardContentProps>(
  (props: ICardContentProps, ref) => (
    <MaterialCardContent {...props} ref={ref} />
  ),
);

CardContent.displayName = "CardContent";

export default CardContent;

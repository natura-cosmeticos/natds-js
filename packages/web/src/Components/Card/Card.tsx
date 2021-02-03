/* eslint-disable no-magic-numbers */
import * as React from "react";
import MaterialPaper from "@material-ui/core/Paper";
import { ICardProps } from "./Card.props";

/**
 * ## Importing
 *
 * ```
 * import { Card } from "@naturacosmeticos/natds-web";
 * ```
 */

export const Card = React.forwardRef<HTMLDivElement, ICardProps>(
  (props: ICardProps, ref) => (
    <MaterialPaper {...props} variant="elevation" ref={ref} />
  ),
);

Card.displayName = "Card";

export default Card;

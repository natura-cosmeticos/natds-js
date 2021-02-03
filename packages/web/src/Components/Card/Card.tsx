/* eslint-disable no-magic-numbers */
import * as React from "react";
import MaterialCard from "@material-ui/core/Card";
import { ICardProps } from "./Card.props";

/**
 * ## Importing
 * ```
 * import { Card } from "@naturacosmeticos/natds-web";
 * ```
 */

export const Card = React.forwardRef<HTMLDivElement, ICardProps>(
  ({ elevation = 1, ...props }: ICardProps, ref) => (
    <MaterialCard
      {...props}
      variant="elevation"
      elevation={elevation}
      ref={ref}
    />
  ),
);

Card.displayName = "Card";

/**
 * @deprecated `Paper` will be deprecated soon
 * Use `Card` instead
 */
export const Paper = Card;

export default { Card, Paper };

import * as React from "react";
import MaterialCard from "@material-ui/core/Card";
import { ICardProps } from "./Card.props";

/**
 * For more advanced usages, check [Material Card docs](https://material-ui.com/components/cards/)
 *
 * ## Importing
 *
 * ```
 * import { Card } from "@naturacosmeticos/natds-web";
 * ```
 *
 * @see https://material-ui.com/components/cards/
 */
export const Card = React.forwardRef<unknown, ICardProps>(
  (props: ICardProps, ref: ICardProps["ref"]) => (
    <MaterialCard {...props} ref={ref} />
  ),
);

Card.displayName = "Card";

export default Card;

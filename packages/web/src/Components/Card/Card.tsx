/* eslint-disable no-magic-numbers */
import * as React from "react";
import MaterialPaper from "@material-ui/core/Paper";
import { ICardProps } from "./Card.props";

/**
 *
 * ```
 * import { Card } from "@naturacosmeticos/natds-web";
 * ```
 *
 */

export const Card = (props: ICardProps, ref) => (<MaterialPaper {...props} ref={ref} />);

Card.displayName = "Card";

/**
 * @deprecated
 */

export const Paper = Card;

export default { Card, Paper };

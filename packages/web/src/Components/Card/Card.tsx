import * as React from 'react'
import MaterialPaper from '@material-ui/core/Paper'
import { ICardProps } from './Card.props'

/**
 * ```
 * import { Card } from '@naturacosmeticos/natds-web';
 * ```
 *
 */
export const Card = React.forwardRef<HTMLDivElement, ICardProps>(
  (props: ICardProps, ref) => <MaterialPaper {...props} ref={ref} />
)

Card.displayName = 'Card'

/**
 * @deprecated `Paper` component will be deprecated soon.
 * Use `Card` instead
 */

export const Paper = Card

export default { Card, Paper }

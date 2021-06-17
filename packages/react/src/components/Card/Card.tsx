import React from 'react'
import { CardProps } from './Card.props'
import styles from './Card.styles'

const Card = ({
  children,
  elevation = true,
  radius = true,
  testID
}: CardProps): JSX.Element => {
  const { card } = styles({ elevation, radius })

  return (
    <div className={card} data-testid={testID}>
      {children}
    </div>
  )
}

export default Card

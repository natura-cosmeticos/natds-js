import React from 'react'
import { CardProps } from './Card.props'
import styles from './Card.styles'

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({
    children,
    elevation = true,
    radius = true,
    testID,
    className = '',
    ...props
  }, ref) => {
    const { card } = styles({ elevation, radius })

    return (
      <div
        className={`${className} ${card}`}
        data-testid={testID}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

export default Card

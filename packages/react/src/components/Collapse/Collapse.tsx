import React from 'react'
import styles from './Collapse.styles'
import { CollapseProps } from './Collapse.props'

const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>(({
  className = '',
  testID,
  ...props
}, ref) => {
  const { collapse } = styles(props)

  return (
    <div
      {...props}
      className={`${className} ${collapse}`}
      data-testid={testID}
      ref={ref}
    />
  )
})

export default Collapse

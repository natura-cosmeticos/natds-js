import React from 'react'
import styles from './Collapse.styles'
import { CollapseProps } from './Collapse.props'

const Collapse: React.FC<CollapseProps> = ({
  open,
  className = '',
  testID = '',
  ...props
}) => {
  const { collapse } = styles({ open })

  return (
    <div
      {...props}
      className={`${className} ${collapse}`}
      data-testid={testID}
    />
  )
}

export default Collapse

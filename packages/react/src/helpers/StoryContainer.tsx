import React from 'react'
import { createUseStyles } from 'react-jss'

const styles = createUseStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16,
    maxWidth: 400,
    flexDirection: (props) => (props.isColumn ? 'column' : 'row')
  }
})

const StoryContainer = ({ children, isColumn = false }) => {
  const classes = styles({ isColumn })

  return (
    <div className={classes.container}>
      {children}
    </div>
  )
}

export default StoryContainer

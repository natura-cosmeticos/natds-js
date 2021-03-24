import React from 'react'
import { createUseStyles } from 'react-jss'

const styles = createUseStyles({
  container: {
    display: 'flex',
    gap: 16,
    maxWidth: 500
  }
})

const StoryContainer = ({ children }) => {
  const classes = styles()

  return (
    <div className={classes.container}>
      {children}
    </div>
  )
}

export default StoryContainer

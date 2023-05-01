/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

const styles = createUseStyles((theme: Theme) => ({

  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '276px',
    width: '100%',
    // border: '1px solid green',
    gap: 8,
    height: 30
  },
  box: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    backgroundColor: theme.color.lowEmphasis,
    minHeight: 8,
    height: 8,
    width: '100%',
    borderRadius: 4

  },
  boxProgress: {
    display: 'flex',
    position: 'relative',
    width: '30%',
    height: '100%',
    backgroundColor: theme.color.success,
    boxSizing: 'border-box',
    padding: 2,
    borderRadius: 4,
    fontSize: 10,
    color: theme.color.onSuccess
  },
  boxChip: {
    display: 'flex',
    position: 'absolute',
    right: '-5px',
    top: '-8px',
    width: 56,
    height: 24,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.success
  },
  footer: {
    display: 'flex',
    width: '100%',
    fontSize: 10,
    justifyContent: 'space-between',
    color: theme.color.highlight
  }
}))

export default styles

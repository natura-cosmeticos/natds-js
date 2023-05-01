/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

const styles = createUseStyles((theme: Theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: [theme.typography.display.fontFamily, theme.typography.fallback.fontFamily],
    alignItems: 'center',
    position: 'relative',
    backgroundColor: theme.color.surface,
    width: '100%',
    height: '56px'
    // border: '1px solid green'
  },
  surface: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    padding: [0, 8],
    boxSizing: 'border-box'
    // border: '1px solid red'
  }
}))

export default styles

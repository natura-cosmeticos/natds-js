/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

const styles = createUseStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    width: '100%',
    padding: 16,
    maxWidth: '470px',
    boxSizing: 'border-box',
    color: theme.color.highlight
    // border: '1px solid green'
  },
  containerGap16: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: '470px',
    width: '100%',
    padding: 16,
    boxSizing: 'border-box',
    color: theme.color.highlight
    // border: '1px solid green'
  },
  row: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
    // border: '1px solid red'
  },
  rowPayd: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BBBBBB66',
    color: theme.color.highlight,
    height: 48
  },
  rowBetween: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  },
  rowGap16: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    gap: 16
  },
  keyHead: {
    fontWeight: theme.typography.fontWeight.medium
  },
  keyBody: {
    fontWeight: theme.typography.fontWeight.regular,
    color: theme.color.mediumEmphasis
  },
  valueHeadSub: {
    textDecoration: 'line-through',
    fontWeight: theme.typography.fontWeight.medium
  },
  valueHead: {
    fontWeight: theme.typography.fontWeight.medium
  },
  valueBody: {
    fontWeight: theme.typography.fontWeight.regular,
    color: theme.color.mediumEmphasis
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: [theme.typography.display.fontFamily, theme.typography.fallback.fontFamily],
    alignItems: 'center',
    position: 'relative',
    color: theme.color.highlight,
    backgroundColor: theme.color.surface,
    width: '100%',
    height: '74px'
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    width: '100%'

  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
    color: theme.color.highlight
  },
  colPd: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    width: '100%',
    padding: 16,
    boxSizing: 'border-box'
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

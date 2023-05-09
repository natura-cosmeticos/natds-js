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
    justifyContent: 'space-around',
    padding: [0, 8],
    boxSizing: 'border-box'
    // border: '1px solid red'
  },
  wrapper: {
    display: 'flex',
    // flexGrow: 1,
    width: '33%',
    gap: 8,
    justifyContent: 'start',
    alignItems: 'center'
    // border: '1px solid green'
  },
  wrapperLogo: {
    display: 'flex',
    // flexGrow: 1,
    width: '33%',
    justifyContent: 'center'
    // border: '1px solid yellow'
  },
  wrapperBtn: {
    display: 'flex',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center'
    // width: '33%'
    // border: '1px solid blue'
  },
  '@media screen and (max-width: 780px)': {
    wrapperBtn: {
      // flexGrow: 1,
      width: '33%',
      justifyContent: 'end'
    }
  },
  wrapperBadge: {
    display: 'flex',
    position: 'relative',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center'
    // border: '1px solid red'
  },
  badgePosition: {
    display: 'flex',
    position: 'absolute',
    left: '20px',
    top: 3,
    zIndex: 999
  },
  badgeIconBtnPosition: {
    display: 'flex',
    position: 'absolute',
    right: '0px',
    top: 1,
    zIndex: 999
  }
}))

export default styles

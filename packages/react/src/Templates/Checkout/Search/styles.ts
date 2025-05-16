/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

const styles = createUseStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start',
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: theme.color.surface,
    width: '100%',
    gap: 8
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
  },
  title: {
    padding: 0,
    fontFamily: theme.typography.headline.fontFamily,
    fontWeight: theme.typography.fontWeight.medium,
    fontSize: theme.heading6.fontSize,
    color: theme.color.highlight
  },
  subtitulo: {
    padding: 0,
    fontFamily: theme.subtitle1,
    fontWeight: theme.typography.fontWeight.regular,
    fontSize: theme.typography.fontSize.level1,
    color: theme.color.highlight
  },
  containerSearch: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    gap: 16
  },
  wrapperIcon: {
    padding: '2px',
    position: 'relative',
    width: '100%',
    overflow: 'hidden'
  },
  iconPossition: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: '0px',
    top: '0px',
    zIndex: 10,
    height: '100%',
    width: '48px'
    // backgroundColor: theme.color.surface
    // border: '1px solid red'
  },
  searchRow: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'end',
    width: '100%',
    gap: 24
    // border: '1px solid red'
  },
  counterRow: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    gap: 24
    // border: '1px solid red'
  },
  CorrectionPadding: {
    paddingBottom: 3
  },
  width100: {
    width: '100%',
    paddingRight: '48px'
  },
  '@media screen and (max-width: 780px)': {
    searchRow: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      gap: 24
      // border: '1px solid red'
    },
    counterRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      gap: 24
    }
  }

}))

export default styles

/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

const styles = createUseStyles((theme: Theme) => ({

  container: {
    display: 'flex',
    position: 'relative',
    fontFamily: [theme.tag.label.primary.fontFamily, theme.tag.label.fallback.fontFamily],
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    border: ' 1px solid #0000001F',
    gap: theme.size.micro,
    boxSizing: '-moz-initial',
    minWidth: 360,
    width: '100%',
    fontWeight: theme.typography.fontWeight.medium,
    fontSize: theme.typography.fontSize.level2
  },
  wrapper: {
    width: '100%',
    maxWidth: 328,
    minHeight: '90px'
  },
  wrapperBTN: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: '80px',
    maxWidth: 328,
    gap: 16
  },
  wrapperLogo: {
    display: 'flex',
    width: '100%',
    marginBottom: '40px',
    alignItems: 'center',
    flexDirection: 'column'
  },
  wrapperLogin: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    minHeight: '200px',
    marginBottom: '13px',
    gap: '24px'
  },
  wrapperChecks: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '67px',
    maxWidth: 328
  },
  row: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  colLeft: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: '150px',
    width: '100%'
  },
  colRight: {
    overflow: 'hidden',
    width: '100%',
    height: '900px'
  },
  btnOpenIMG: {
    display: 'flex',
    position: 'absolute',
    // border: '1px solid red',
    top: 5,
    left: 5
  },

  '@media screen and (max-width: 1280px)': {
    containerStep: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      // border: '1px solid yellow',
      minHeight: '80px',
      width: '100%',
      gap: 24,
      overflow: 'hidden'
    },
    containerSection: {
      display: 'flex',
      width: '100%',
      gap: 16,
      flexDirection: 'column-reverse',
      justifyContent: 'center',
      alignItems: 'center'
    },
    summaryContainer: {
      display: 'flex',
      width: '100%',
      // alignItems: 'start',
      maxWidth: 'unset',
      minHeight: 'unset',
      flexDirection: 'column',
      justifyContent: 'start',
      backgroundColor: theme.color.surface,
      gap: 4
    }
  }
}))

export default styles

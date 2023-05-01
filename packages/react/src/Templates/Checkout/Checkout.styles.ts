/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

const styles = createUseStyles((theme: Theme) => ({

  container: {
    display: 'flex',
    fontFamily: [theme.tag.label.primary.fontFamily, theme.tag.label.fallback.fontFamily],
    alignItems: 'center',
    flexDirection: 'column',
    border: ' 1px solid #0000001F',
    gap: theme.size.micro,
    // backgroundColor: theme.color.primary,
    boxSizing: '-moz-initial',
    maxWidth: 1280,
    minWidth: 360,
    width: '100%',
    fontWeight: theme.typography.fontWeight.medium,
    fontSize: theme.typography.fontSize.level2
  },
  containerBody: {
    display: 'flex',
    width: '100%',
    gap: 24,
    // backgroundColor: '#FAFAFA',
    flexDirection: 'column',
    padding: 24,
    boxSizing: 'border-box'

  },
  containerSection: {
    display: 'flex',
    width: '100%',
    gap: 16
    // backgroundColor: '#FAFAFA'
  },
  sectionSearchContainer: {
    display: 'flex',
    width: '100%',
    gap: 1,
    flexDirection: 'column'
  },
  containerStep: {
    display: 'flex',
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'column',
    // border: '1px solid red',
    minHeight: '80px',
    maxWidth: 920,
    gap: 24
  },
  summaryContainer: {
    display: 'flex',
    // border: '1px solid red',
    flex: 1,
    maxWidth: '296px',
    minHeight: '296px',
    // alignItems: 'start',
    flexDirection: 'column',
    justifyContent: 'start',
    backgroundColor: theme.color.surface,
    gap: 4
  },
  containerSearch: {
    display: 'flex',
    flexDirection: 'column',
    padding: 24,
    boxSizing: 'border-box',
    backgroundColor: theme.color.surface
  },
  banner: {
    display: 'flex',
    backgroundColor: '#BBBBBB66',
    width: '100%',
    height: '128px'
  },
  content: {
    color: '',
    fontFamily: [theme.tag.label.primary.fontFamily, theme.tag.label.fallback.fontFamily],
    fontSize: theme.tag.label.fontSize,
    fontWeight: theme.tag.label.primary.fontWeight,
    letterSpacing: theme.tag.label.letterSpacing,
    lineHeight: theme.tag.label.lineHeight,
    userSelect: 'none',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
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

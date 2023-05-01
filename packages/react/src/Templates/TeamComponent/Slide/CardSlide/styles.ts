/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

const styles = createUseStyles((theme: Theme) => ({
  header: {
    display: 'flex',
    fontFamily: [theme.typography.display.fontFamily, theme.typography.fallback.fontFamily],
    alignItems: 'center',
    position: 'relative',
    backgroundColor: theme.color.surface,
    width: '100%',
    height: '24px'
    // border: '1px solid green'
  },
  title: {
    padding: 0,
    fontFamily: theme.typography.headline.fontFamily,
    fontWeight: theme.typography.fontWeight.medium,
    fontSize: theme.heading6.fontSize,
    color: theme.color.highlight
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    // border: '1px solid green',
    color: theme.color.highlight,
    backgroundColor: theme.color.surface,
    gap: 8,
    minHeight: 451,
    with: '100%',
    boxSizing: 'border-box',
    padding: 24,
    overflow: 'hidden'
  },
  containerSlide: {
    display: 'flex',
    width: '2100%',
    gap: '16px'
    // border: '1px solid red'
  },
  containerCard: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: [theme.typography.display.fontFamily, theme.typography.fallback.fontFamily],
    position: 'relative',
    gap: '16px',
    minWidth: 270,
    maxWidth: 270,
    minHeight: 310,
    boxSizing: 'border-box',
    padding: 16,
    // border: '1px solid #00000024',
    backgroundColor: theme.color.surface,
    borderRadius: 4

  },
  cardHeader: {
    display: 'flex',
    width: '100%',
    gap: 16

  },
  cardBody: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    // border: '1px solid red',
    boxSizing: 'border-box',
    padding: 8,
    backgroundColor: '#BBBBBB66'
  },
  cardFooter: {
    display: 'flex',
    width: '100%',
    // border: '1px solid red',
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardIMG: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 96,
    minHeight: 96,
    borderRight: '1px solid #BBBBBB66',
    borderBottom: '1px solid #BBBBBB66'
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    width: '100%'
    // border: '1px solid red'

  },
  row: {
    display: 'flex',
    gap: 4,
    width: '100%'
    // border: '1px solid yellow'

  },
  tableRow: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 32
  },
  cell: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRight: '1px solid #0000001F',
    boxSizing: 'border-box',
    minWidth: 72,
    height: '100%',
    '&:last-child': {
      border: 'none'
    }
  },
  cellEnd: {
    display: 'flex',
    justifyContent: 'end',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: '1px solid #0000001F',
    boxSizing: 'border-box',
    // backgroundColor: 'AppWorkspace',
    padding: 8,
    height: 46,
    minWidth: 72,
    '&:last-child': {
      border: 'none'
    }
  },
  noBorder: {
    border: 'none'
  },
  textRegular: {
    fontWeight: theme.typography.fontWeight.regular
  },
  textMedium: {
    fontWeight: theme.typography.fontWeight.medium
  },
  textSub: {
    textDecoration: 'line-through',
    fontWeight: theme.typography.fontWeight.regular,
    color: '#EB6619'
  },
  text: {
    textAlign: 'center'
  },
  textProd: {
    fontSize: theme.typography.fontSize.level1
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
  },
  CorrectionPadding: {
    paddingBottom: 0
  }
}))

export default styles

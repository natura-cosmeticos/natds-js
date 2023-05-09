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
    gap: 8,
    // border: '1px solid green'
    color: theme.color.highlight
  },
  title: {
    padding: 0,
    fontFamily: theme.typography.headline.fontFamily,
    fontWeight: theme.typography.fontWeight.medium,
    fontSize: theme.heading6.fontSize,
    color: theme.color.highlight
  },
  subtitulo: {
    padding: 2,
    fontFamily: theme.subtitle1,
    fontWeight: theme.typography.fontWeight.regular,
    fontSize: theme.typography.fontSize.level1,
    color: theme.color.highlight
    // border: '1px solid red'
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    // height: 98,
    width: '100%',
    boxSizing: 'border-box',
    // border: '1px solid red',
    padding: 24,
    gap: 8
  },
  tableConteiner: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  tableRow: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    // backgroundColor: '#FAFAFA'
    backgroundColor: '#BBBBBB66'
  },
  tableColumn: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 48
    // border: '1px solid red'
  },
  tagContainer: {
    position: 'relative'
  },
  cell: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRight: '1px solid #0000001F',
    boxSizing: 'border-box',
    padding: 14,
    minWidth: 100,
    height: '100%',
    '&:last-child': {
      border: 'none'
    }

  },
  flex1: {
    flex: 2
  },
  noBorder: {
    border: 'none'
  },
  empety: {
    width: 100
  },
  productorContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '200px',
    minWidth: '200px',
    width: '100%',
    position: 'relative'
    // backgroundColor: 'yellow'
  },
  productorRow: {
    display: 'flex',
    justifyContent: 'start',
    alignContent: 'flex-start',
    width: '100%',
    // border: '1px solid yellowgreen',
    gap: 8
  },
  imgWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 128,
    minHeight: 128,
    maxWidth: 128,
    boxSizing: 'border-box',
    paddingTop: 16,
    width: '100%'
    // borderRight: '1px solid #0000001F',
    // borderBottom: '1px solid #0000001F'
    // backgroundColor: theme.color.lowEmphasis
  },
  prodWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 240,
    maxWidth: 340,
    minHeight: 128,
    boxSizing: 'border-box',
    gap: 8,
    paddingTop: 16,
    width: '100%'
    // backgroundColor: theme.color.lowEmphasis
  },
  footer: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'end',
    width: '100%',
    padding: 24,
    boxSizing: 'border-box',
    // border: '1px solid red',
    backgroundColor: theme.color.surface
  },
  cardTitle: {
    width: '100%'
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    fontSize: 12,
    gap: 2
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    width: '100%',
    gap: 14
  },
  CorrectionPadding: {
    paddingBottom: 0
  },
  codBrand: {
    display: 'flex',
    gap: 4
  },
  colorLow: {
    color: theme.color.lowEmphasis
  }

}))

export default styles

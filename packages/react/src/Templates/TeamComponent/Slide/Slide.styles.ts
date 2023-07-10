/* eslint-disable max-lines */
/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { BrandProps } from '../../GlobalTypes'
import { buildTheme } from '../../../ThemeProvider'

type RuleNames =
  | 'header'
  | 'title'
  | 'container'
  | 'containerRelativo'
  | 'containerSlide'
  | 'containerCard'
  | 'cardHeader'
  | 'cardBody'
  | 'cardFooter'
  | 'cardIMG'
  | 'col'
  | 'row'
  | 'tableRow'
  | 'cell'
  | 'cellEnd'
  | 'noBorder'
  | 'textRegular'
  | 'textMedium'
  | 'textSub'
  | 'text'
  | 'textProd'
  | 'colPd'
  | 'surface'
  | 'nextBtn'
  | 'prevBtn'
  | 'box'
  | 'boxProgress'
  | 'boxChip'
  | 'footer'
  | 'CorrectionPadding'
  | 'bulletsContainer'
  | 'bulletOn'
  | 'bulletOf'

export interface SlideStyleProps {
    brand: BrandProps | undefined
  }

const getThemeSel = (theme: Theme) => (brand: BrandProps | undefined) => {
  const themeSel = buildTheme(brand, 'light')
  if (brand) {
    return {
      bulletOnClick: themeSel.color.primary
    }
  }
  return {
    bulletOnClick: theme.color.primary
  }
}

const styles = createUseStyles<RuleNames, SlideStyleProps, Theme>((theme: Theme) => ({
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
    width: '100%',
    boxSizing: 'border-box',
    padding: 24,
    overflow: 'hidden'
  },
  containerRelativo: {
    display: 'flex',
    position: 'relative',
    minHeight: 310
    // border: '1px solid yellow'
  },
  containerSlide: {
    display: 'flex',
    position: 'absolute',
    width: 'auto',
    gap: '16px',
    // border: '1px solid green',
    transition: 'all .6s'
  },
  containerCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    minWidth: 270,
    maxWidth: 270,
    minHeight: 310,
    boxSizing: 'border-box',
    padding: 16,
    border: '1px solid #00000024',
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
  nextBtn: {
    display: 'flex',
    position: 'absolute',
    top: 'calc(50% - 28px)',
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000007A',
    borderRadius: '50%',
    zIndex: 10,
    flexShrink: 0,
    width: 56,
    height: 56,
    cursor: 'pointer'
  },
  prevBtn: {
    display: 'flex',
    position: 'absolute',
    top: 'calc(50% - 28px)',
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000007A',
    borderRadius: '50%',
    zIndex: 10,
    flexShrink: 0,
    width: 56,
    height: 56,
    cursor: 'pointer'
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
  },
  bulletsContainer: {
    display: 'flex',
    justifyContent: 'center',
    boxSizing: 'border-box',
    padding: 25,
    alignItems: 'center',
    width: '100%',
    gap: 24
    // border: '1px solid red'
  },
  bulletOn: {
    display: 'flex',
    flexShrink: 0,
    width: 8,
    height: 8,
    cursor: 'pointer',
    minWidth: 8,
    minHeight: 8,
    borderRadius: '50%',
    // backgroundColor: theme.color.primary
    backgroundColor: ({ brand }) => getThemeSel(theme)(brand).bulletOnClick
  },
  bulletOf: {
    display: 'flex',
    flexShrink: 0,
    width: 8,
    height: 8,
    cursor: 'pointer',
    minWidth: 8,
    minHeight: 8,
    borderRadius: '50%',
    backgroundColor: theme.color.lowEmphasis
  }
}))

export default styles

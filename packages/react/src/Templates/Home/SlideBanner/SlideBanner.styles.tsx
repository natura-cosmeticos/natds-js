/* eslint-disable max-lines */
/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { BrandProps } from '../../GlobalTypes'
import { buildTheme } from '../../../ThemeProvider'

type RuleNames =
  | 'container'
  | 'containerOverflow'
  | 'containerImageNext'
  | 'imageWrapper'
  | 'bulletsWrapper'
  | 'bulletBox'
  | 'bulletON'
  | 'bulletOF'

export interface SlideStyleProps {
    brand?: BrandProps
  }
const getThemeSel = (theme: Theme) => ({ brand }: SlideStyleProps) => {
  if (brand) {
    const themeSel = buildTheme(brand, 'light')
    return {
      bulletOnClick: themeSel.color.primary
    }
  }
  return {
    bulletOnClick: theme.color.primary
  }
}

const styles = createUseStyles<RuleNames, SlideStyleProps, Theme>((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: [theme.typography.display.fontFamily, theme.typography.fallback.fontFamily],
    alignItems: 'center',
    backgroundColor: theme.color.surface,
    overflow: 'hidden',
    // border: '1px solid green',
    width: '100%',
    maxWidth: '1280px'
  },
  containerOverflow: {
    display: 'flex',
    fontFamily: [theme.typography.display.fontFamily, theme.typography.fallback.fontFamily],
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    width: '1280px',
    // border: '1px solid green',
    height: '424px'
  },
  containerImageNext: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 'auto',
    transition: 'all .6s',
    minHeight: 424
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '1280px',
    // border: '1px solid red',
    minHeight: 310
  },
  bulletsWrapper: {
    display: 'flex',
    width: '100%',
    height: '40px',
    // border: '1px solid yellow',
    justifyContent: 'center'
  },
  bulletBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    // border: '1px solid black',
    height: 24,
    cursor: 'pointer'
  },
  bulletON: {
    display: 'flex',
    flexShrink: 0,
    width: 8,
    height: 8,
    cursor: 'pointer',
    minWidth: 8,
    minHeight: 8,
    borderRadius: '50%',
    backgroundColor: ({ brand }) => brand && getThemeSel(theme)({ brand }).bulletOnClick
  },
  bulletOF: {
    display: 'flex',
    flexShrink: 0,
    width: 8,
    height: 8,
    cursor: 'pointer',
    minWidth: 8,
    minHeight: 8,
    borderRadius: '50%',
    backgroundColor: theme.color.highEmphasis
  }

}))

export default styles

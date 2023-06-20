/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { ProgressIndicatorProps } from './ProgressIndicator.props'
import { buildTheme } from '../../ThemeProvider'

type ProgressIndicatorStyleProps = Pick<ProgressIndicatorProps, 'size' | 'showBackdrop' | 'brand'>

const themeSelectProgress = (theme: Theme) => ({ brand }: ProgressIndicatorStyleProps) => {
  const themeSelectRD = buildTheme(brand, 'light')
  if (brand) {
    return themeSelectRD.color.primary
  }
  return theme.color.primary
}

const styles = createUseStyles((theme: Theme) => ({
  backdrop: {
    height: ({ size }: ProgressIndicatorStyleProps) => size && theme.size[size],
    width: ({ size }: ProgressIndicatorStyleProps) => size && theme.size[size],
    backgroundColor: ({ showBackdrop }: ProgressIndicatorStyleProps) => showBackdrop && theme.color.surface,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.size.micro
  },
  loader: {
    height: ({ size }: ProgressIndicatorStyleProps) => size && theme.size[size],
    width: ({ size }: ProgressIndicatorStyleProps) => size && theme.size[size],
    '& svg': {
      animation: '$rotate 2.7s linear infinite',
      '& circle': {
        fill: 'none',
        strokeWidth: theme.size.micro,
        animation: '$spin 1.7s linear infinite',
        strokeLinecap: 'round',
        stroke: themeSelectProgress(theme)
      }
    }
  },
  '@keyframes spin': {
    '0%': {
      strokeDasharray: '1,200',
      strokeDashoffset: 0
    },
    '50%': {
      strokeDasharray: '100,200',
      strokeDashoffset: -35
    },
    '100%': {
      strokeDasharray: '100,200',
      strokeDashoffset: -124
    }
  },
  '@keyframes rotate': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '50%': {
      transform: 'rotate(360deg)'
    },
    '100%': {
      transform: 'rotate(720deg)'
    }
  }
}))

export default styles

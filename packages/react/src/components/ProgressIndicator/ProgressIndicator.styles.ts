import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { ProgressIndicatorProps } from './ProgressIndicator.props'

const styles = createUseStyles((theme: Theme) => ({
  layer: {
    height: ({ size }: ProgressIndicatorProps) => size && theme.size[size] + 8,
    width: ({ size }: ProgressIndicatorProps) => size && theme.size[size] + 8,
    backgroundColor: ({ showLayer }: ProgressIndicatorProps) => showLayer && theme.color.surface,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.size.micro
  },
  spinner: {
    height: ({ size }: ProgressIndicatorProps) => size && theme.size[size],
    width: ({ size }: ProgressIndicatorProps) => size && theme.size[size],
    border: `${theme.size.micro}px solid ${theme.color.primary}`,
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
    borderRadius: '50%',
    animation: '$spin 1.7s linear infinite'
  },
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '75%': {
      transform: 'rotate(360deg)'
    },
    '100%': {
      transform: 'rotate(720deg)'
    }
  }
}))

export default styles

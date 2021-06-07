import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { ProgressIndicatorProps } from './ProgressIndicator.props'

const styles = createUseStyles((theme: Theme) => ({
  base: {
    height: ({ size }: ProgressIndicatorProps) => size && theme.size[size],
    width: ({ size }: ProgressIndicatorProps) => size && theme.size[size],
    borderRadius: ({ variant }: ProgressIndicatorProps) => variant === 'circular' && '50%',
    border: `4px solid ${theme.color.primary}`,
    animation: '$spin 1.4s linear infinite',
    borderLeftColor: 'transparent'
  },
  layer: {
    height: ({ size }: ProgressIndicatorProps) => size && theme.size[size],
    width: ({ size }: ProgressIndicatorProps) => size && theme.size[size],
    borderRadius: ({ variant }: ProgressIndicatorProps) => variant === 'circular' && '50%',
    backgroundColor: ({ showLayer }: ProgressIndicatorProps) => showLayer && theme.color.surface,
    padding: theme.spacing.micro
  },
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  }
}))

export default styles

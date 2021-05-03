import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { InputProps } from './Input.props'

type InputStyleProps = Required<Pick<InputProps, 'size'>>

export const styles = createUseStyles((theme: Theme) => ({
  input: {
    background: 'none',
    border: 'none',
    boxSizing: 'border-box',
    color: theme.color.mediumEmphasis,
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    fontSize: 16,
    height: ({ size }: InputStyleProps) => theme.size[size],
    letterSpacing: 0.51,
    outline: 'none',
    padding: theme.spacing.small,
    width: '100%',
    '&:read-only': {
      pointerEvents: 'none'
    },
    '&:disabled': {
      color: theme.color.lowEmphasis,
      cursor: 'default'
    },
    '&::placeholder': {
      color: ({ disabled }) => (disabled ? theme.color.lowEmphasis : theme.color.mediumEmphasis)
    }
  }
}))

export default styles

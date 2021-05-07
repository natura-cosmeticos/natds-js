import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { InputProps } from './Input.props'

type InputStyleProps = Required<Pick<InputProps, 'size' | 'isResizable'>>

const styles = createUseStyles((theme: Theme) => ({
  base: {
    background: 'none',
    border: 'none',
    color: theme.color.highEmphasis,
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    fontSize: 16,
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
  },
  input: {
    extend: 'base',
    boxSizing: 'border-box',
    height: ({ size }: InputStyleProps) => theme.size[size]
  },
  textArea: {
    extend: 'base',
    resize: ({ isResizable }: InputStyleProps) => !isResizable && 'none'
  }
}))

export default styles

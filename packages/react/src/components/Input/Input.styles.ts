/* eslint-disable max-lines-per-function */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { InputProps } from './Input.props'

type InputStyleProps = Required<Pick<InputProps, 'size' | 'isResizable' | 'disabled' | 'readOnly' | 'feedback'>>

const getFeedbackBorderColor = (theme: Theme, { feedback }: InputStyleProps) => {
  switch (feedback) {
    case 'error':
      return theme.color.alert
    case 'success':
      return theme.color.success
    default:
      return theme.color.lowEmphasis
  }
}

export const actionStyles = createUseStyles((theme: Theme) => ({
  action: {
    marginRight: ({ action }) => action === 'icon' && theme.spacing.tiny
  },
  actionImage: {
    maxWidth: theme.size.large
  }
}))

export const styles = createUseStyles((theme: Theme) => ({
  wrapper: {
    position: 'relative',
    backgroundColor: theme.color.surface,
    border: '1px solid',
    borderColor: (props: InputStyleProps) => getFeedbackBorderColor(theme, props),
    borderRadius: theme.borderRadius.medium,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: ({ disabled, readOnly }: InputStyleProps) => (!disabled && !readOnly ? 'text' : 'default'),
    '&:hover': {
      borderColor: ({ disabled }: InputStyleProps) => !disabled && theme.color.mediumEmphasis
    },
    '&:focus-within': {
      border: '2px solid',
      borderColor: theme.color.primary
    },
    '&:after': {
      backgroundColor: theme.color.lowEmphasis,
      content: '""',
      height: '100%',
      left: 0,
      opacity: ({ readOnly }: InputStyleProps) => (readOnly ? theme.opacity.disabledLow : 0),
      position: 'absolute',
      top: 0,
      width: '100%',
      pointerEvents: 'none'
    }
  },
  base: {
    background: 'none',
    border: 'none',
    color: theme.color.highEmphasis,
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    fontSize: 16,
    letterSpacing: 0.51,
    outline: 'none',
    paddingTop: theme.spacing.small,
    paddingBottom: theme.spacing.small,
    paddingLeft: theme.spacing.small,
    paddingRight: ({ action }) => (action ? theme.spacing.tiny : theme.spacing.small),
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

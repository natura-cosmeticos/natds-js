/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { TextFieldProps } from './TextField.props'

type TextFieldStyleProps = Required<Pick<TextFieldProps, 'size' | 'feedback' | 'disabled' | 'readOnly' | 'action'>>

const getFeedbackBorderColor = (theme: Theme, { feedback }: TextFieldStyleProps) => {
  switch (feedback) {
    case 'error':
      return theme.color.alert
    case 'success':
      return theme.color.success
    default:
      return theme.color.lowEmphasis
  }
}

const getFeedbackTextColor = (theme: Theme, { feedback, disabled }: TextFieldStyleProps) => {
  const defaultColor = disabled ? theme.color.lowEmphasis : theme.color.mediumEmphasis

  switch (feedback) {
    case 'error':
      return theme.color.alert
    case 'success':
      return theme.color.success
    default:
      return defaultColor
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
  inputContainer: {
    position: 'relative',
    backgroundColor: theme.color.surface,
    border: '1px solid',
    borderColor: (props: TextFieldStyleProps) => getFeedbackBorderColor(theme, props),
    borderRadius: theme.borderRadius.medium,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '&:hover': {
      borderColor: ({ disabled }: TextFieldStyleProps) => !disabled && theme.color.mediumEmphasis
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
      opacity: ({ readOnly }: TextFieldStyleProps) => (readOnly ? theme.opacity.disabledLow : 0),
      position: 'absolute',
      top: 0,
      width: '100%'
    }
  },
  label: {
    color: (props: TextFieldStyleProps) => getFeedbackTextColor(theme, props),
    display: 'inline-block',
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    fontSize: 14,
    letterSpacing: 0.11,
    marginBottom: theme.spacing.micro
  },
  helperText: {
    alignItems: 'center',
    color: (props: TextFieldStyleProps) => getFeedbackTextColor(theme, props),
    display: 'flex',
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    fontSize: 12,
    letterSpacing: 0.4,
    marginTop: theme.spacing.micro,
    marginBottom: 0,
    '& > i': {
      marginRight: ({ feedback }: TextFieldStyleProps) => feedback && theme.spacing.micro
    }
  }
}))

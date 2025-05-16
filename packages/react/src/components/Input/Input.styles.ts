/* eslint-disable max-lines-per-function */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { InputProps } from './Input.props'
import { buildTheme } from '../../ThemeProvider'

type InputStyleProps = Pick<InputProps, 'feedback' | 'disabled' | 'readOnly'| 'size' | 'action' | 'isResizable' | 'brand'>

const getFeedbackBorderColor = (theme: Theme) => ({ feedback }: InputStyleProps) => {
  const borderColor = {
    error: theme.color.alert,
    success: theme.color.success
  }

  return feedback ? borderColor[feedback] : theme.color.lowEmphasis
}
const getColorTheme = (theme: Theme) => ({ brand, feedback }: InputStyleProps) => {
  const ThemeBorderColor = brand ? buildTheme(brand, 'light') : theme
  const ErrorSucces = {
    error: ThemeBorderColor.color.alert,
    success: ThemeBorderColor.color.success
  }

  return (feedback ? ErrorSucces[feedback] : ThemeBorderColor.color.primary)
}
const getColorBorderPxTheme = (theme: Theme) => ({ brand, feedback }: InputStyleProps) => {
  const ThemeBorderColor = brand ? buildTheme(brand, 'light') : theme
  const ErrorSucces = {
    error: `0 0 0 1px ${ThemeBorderColor.color.alert}`,
    success: `0 0 0 1px ${ThemeBorderColor.color.success}`
  }
  const colorInterpolation = (feedback ? ErrorSucces[feedback] : `0 0 0 1px ${ThemeBorderColor.color.primary}`)
  return colorInterpolation
}

const styles = createUseStyles((theme: Theme) => ({
  wrapper: {
    alignItems: 'center',
    backgroundColor: theme.color.surface,
    border: '1px solid',
    borderColor: getFeedbackBorderColor(theme),
    borderRadius: theme.textField.borderRadius,
    cursor: ({ disabled, readOnly }: InputStyleProps) => (!disabled && !readOnly ? 'text' : 'default'),
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    '&:hover': {
      borderColor: ({ disabled, readOnly, feedback }: InputStyleProps) => (
        !disabled && !readOnly && !feedback && theme.color.mediumEmphasis
      )
    },
    '&:focus-within': {
      boxShadow: getColorBorderPxTheme(theme),
      borderColor: getColorTheme(theme)
    },
    '&:after': {
      backgroundColor: theme.color.lowEmphasis,
      content: '""',
      height: '100%',
      left: 0,
      borderRadius: theme.textField.borderRadius,
      opacity: ({ readOnly }: InputStyleProps) => (readOnly ? theme.opacity.disabledLow : 0),
      pointerEvents: 'none',
      position: 'absolute',
      top: 0,
      width: '100%'
    }
  },
  leadinContainer: {
    display: 'flex',
    paddingLeft: 8,
    boxSizing: 'border-box',
    justifyContent: 'center',
    alignItems: 'center'
  },
  base: {
    background: 'none',
    border: 'none',
    color: theme.color.highEmphasis,
    borderRadius: theme.textField.borderRadius,
    fontFamily: [
      theme.textField.content.primary.fontFamily,
      theme.textField.content.fallback.fontFamily
    ],
    fontSize: theme.textField.content.fontSize,
    fontWeight: theme.textField.content.primary.fontWeight,
    letterSpacing: theme.textField.content.letterSpacing,
    lineHeight: theme.textField.content.lineHeight,
    outline: 'none',
    padding: theme.spacing.small,
    width: '100%',
    '&:read-only': {
      pointerEvents: 'none'
    },
    '&:disabled': {
      color: theme.color.lowEmphasis,
      cursor: 'default'
    }
  },
  input: {
    extend: 'base',
    boxSizing: 'border-box',
    borderRadius: theme.textField.borderRadius,
    height: ({ size }: InputStyleProps) => size && theme.size[size],
    paddingRight: ({ action }: InputStyleProps) => action && theme.spacing.tiny,
    '&::placeholder': {
      color: ({ disabled }: InputStyleProps) => (
        disabled ? theme.color.lowEmphasis : theme.color.mediumEmphasis
      )
    }
  },
  textArea: {
    extend: 'base',
    paddingRight: ({ action }: InputStyleProps) => action && theme.spacing.tiny,
    resize: ({ isResizable }: InputStyleProps) => !isResizable && 'none',
    '&::placeholder': {
      color: ({ disabled }: InputStyleProps) => (
        disabled ? theme.color.lowEmphasis : theme.color.mediumEmphasis
      )
    }
  }
}))

export default styles

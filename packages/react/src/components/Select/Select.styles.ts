import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { BrandTypes } from '../../brandTypes/brandTypes'
import { buildTheme } from '../../ThemeProvider'

type SelectStyleProps = {
  size: 'medium' | 'mediumX'
  isFilled: boolean,
  isDisabled: boolean
  feedback?: 'error' | 'success'
  brand?: BrandTypes
}

const getBorderColor = (theme:Theme) => ({ isFilled, feedback, isDisabled }: SelectStyleProps) => {
  if (isDisabled) return theme.color.lowEmphasis

  if (isFilled) return theme.color.highEmphasis

  if (feedback === 'error') return theme.color.alert

  if (feedback === 'success') return theme.color.success

  return theme.color.lowEmphasis
}

const getLabelColor = (theme: Theme) => ({ feedback, isDisabled }: SelectStyleProps) => {
  if (isDisabled) return theme.color.lowEmphasis

  if (feedback === 'error') return theme.color.alert

  if (feedback === 'success') return theme.color.success

  return theme.color.mediumEmphasis
}
const getThemeFocus = (theme: Theme) => ({ brand }: SelectStyleProps) => {
  const themeSelectFocus = buildTheme(brand, 'light')

  if (brand) {
    return themeSelectFocus.color.primary
  }
  return theme.color.primary
}

const styles = createUseStyles((theme: Theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: theme.textField.label.primary.fontFamily
  },
  labelText: {
    color: getLabelColor(theme),
    fontSize: theme.textField.label.fontSize,
    fontWeight: theme.textField.label.primary.fontWeight,
    letterSpacing: theme.textField.label.letterSpacing,
    lineHeight: theme.textField.label.lineHeight,
    marginBottom: theme.spacing.micro,
    '&:disabled': {
      color: 'blue'
    }
  },
  inputWrapper: {
    position: 'relative'
  },
  input: {
    width: '100%',
    height: ({ size }: SelectStyleProps) => theme.size[size],
    position: 'relative',
    backgroundColor: theme.color.surface,
    border: '1px solid',
    borderColor: getBorderColor(theme),
    borderRadius: theme.textField.borderRadius,
    padding: `0 ${theme.spacing.small}px`,
    color: ({ isFilled }: SelectStyleProps) => (
      isFilled ? theme.color.highEmphasis : theme.color.mediumEmphasis),
    fontSize: theme.body1.fontSize,
    fontWeight: theme.textField.content.primary.fontWeight,
    letterSpacing: theme.textField.content.letterSpacing,
    lineHeight: theme.textField.content.lineHeight,
    appearance: 'none',
    outline: 'none',
    boxSizing: 'border-box',

    '&:focus:enabled': {
      borderColor: getThemeFocus(theme),
      color: theme.color.mediumEmphasis
    },

    '&:hover:enabled': {
      borderColor: theme.color.highEmphasis,
      color: theme.color.highEmphasis
    }
  },
  icon: {
    color: ({ isDisabled }: SelectStyleProps) => (isDisabled ? theme.color.lowEmphasis : 'inherit'),
    position: 'absolute',
    top: 0,
    right: theme.spacing.small,
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  }
}))

export default styles

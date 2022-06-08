import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

type SelectStyleProps = {
  size: 'medium' | 'mediumX'
  isFilled: boolean
}

const getBorderColor = (theme:Theme) => ({ isFilled }: SelectStyleProps) => {
  if (isFilled) {
    return theme.color.highEmphasis
  }

  return theme.color.lowEmphasis
}

const styles = createUseStyles((theme: Theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: theme.textField.label.primary.fontFamily
  },
  labelText: {
    color: theme.color.mediumEmphasis,
    fontSize: theme.textField.label.fontSize,
    fontWeight: theme.textField.label.primary.fontWeight,
    letterSpacing: theme.textField.label.letterSpacing,
    lineHeight: theme.textField.label.lineHeight,
    marginBottom: theme.spacing.micro
  },
  inputWrapper: {
    position: 'relative',
    '& > i': {
      position: 'absolute',
      right: theme.spacing.small,
      bottom: theme.spacing.small
    }
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

    '&:focus': {
      borderColor: theme.color.primary,
      color: theme.color.mediumEmphasis
    },

    '&:hover': {
      borderColor: theme.color.highEmphasis,
      color: theme.color.highEmphasis
    }
  }
}))

export default styles

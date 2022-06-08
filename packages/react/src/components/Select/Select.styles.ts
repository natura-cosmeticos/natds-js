import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

type SelectStyleProps = {
  size: 'medium' | 'mediumX'
}

const styles = createUseStyles((theme: Theme) => ({
  wrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: theme.textField.label.primary.fontFamily,
    '& > i': {
      position: 'absolute',
      right: theme.spacing.small,
      bottom: theme.spacing.small

    }
  },
  labelText: {
    color: theme.color.mediumEmphasis,
    fontSize: theme.textField.label.fontSize,
    fontWeight: theme.textField.label.primary.fontWeight,
    letterSpacing: theme.textField.label.letterSpacing,
    lineHeight: theme.textField.label.lineHeight,
    marginBottom: theme.spacing.micro
  },
  input: {
    height: ({ size }: SelectStyleProps) => theme.size[size],
    position: 'relative',
    backgroundColor: theme.color.surface,
    border: `1px solid ${theme.color.lowEmphasis}`,
    borderRadius: theme.textField.borderRadius,
    padding: theme.spacing.small,
    color: theme.color.lowEmphasis,
    fontSize: theme.subtitle2.fontSize,
    fontWeight: theme.textField.content.primary.fontWeight,
    letterSpacing: theme.textField.content.letterSpacing,
    lineHeight: theme.textField.content.lineHeight,
    appearance: 'none',
    outline: 'none',

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

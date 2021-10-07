import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { InputProps } from '../Input.props'
import { getFeedbackTextColor } from '../../TextField/TextField.styles'

const styles = createUseStyles((theme: Theme) => ({
  helperText: {
    alignItems: 'center',
    color: getFeedbackTextColor(theme),
    display: 'flex',
    fontFamily: [
      theme.textField.helperText.primary.fontFamily,
      theme.textField.helperText.fallback.fontFamily
    ],
    fontSize: theme.textField.helperText.fontSize,
    fontWeight: theme.textField.helperText.primary.fontWeight,
    letterSpacing: theme.textField.helperText.letterSpacing,
    lineHeight: theme.textField.helperText.lineHeight,
    marginBottom: 0,
    marginTop: theme.spacing.micro,
    '& > i': {
      marginRight: ({ feedback }: InputProps) => feedback && theme.spacing.micro
    }
  }
}))

export default styles

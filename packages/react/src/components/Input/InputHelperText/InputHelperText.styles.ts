import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { InputProps } from '../Input.props'
import { getFeedbackTextColor } from '../InputLabel/InputLabel.styles'

const styles = createUseStyles((theme: Theme) => ({
  helperText: {
    alignItems: 'center',
    color: getFeedbackTextColor(theme),
    display: 'flex',
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    fontSize: theme.caption.fontSize,
    letterSpacing: 0.4,
    marginTop: theme.spacing.micro,
    marginBottom: 0,
    '& > i': {
      marginRight: ({ feedback }: InputProps) => feedback && theme.spacing.micro
    }
  }
}))

export default styles

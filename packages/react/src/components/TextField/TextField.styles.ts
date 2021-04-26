import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { TextFieldProps } from './TextField.props'

type TextFieldStyleProps = Required<TextFieldProps>

const styles = createUseStyles((theme: Theme) => ({
  input: {
    boxSizing: 'border-box',
    borderRadius: theme.borderRadius.medium,
    height: ({ size }: TextFieldStyleProps) => theme.size[size],
    padding: theme.spacing.small,
    width: '100%',
    '&::placeholder': {
      color: theme.color.mediumEmphasis,
      letterSpacing: 0.51
    }
  }
}))

export default styles

import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { InputProps } from '../Input.props'

type InputActionStyleProps = Required<Pick<InputProps, 'action'>>

const styles = createUseStyles((theme: Theme) => ({
  action: {
    marginRight: ({ action }: InputActionStyleProps) => action === 'icon' && theme.spacing.tiny
  },
  actionImage: {
    maxWidth: theme.size.large
  }
}))

export default styles

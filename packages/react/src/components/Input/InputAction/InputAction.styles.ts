import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { InputProps } from '../Input.props'

type InputActionStyleProps = Required<Pick<InputProps, 'action' | 'size'>>

const styles = createUseStyles((theme: Theme) => ({
  container: {
    marginRight: ({ action }: InputActionStyleProps) => action === 'icon' && theme.spacing.tiny
  },
  wrapper: {
    borderBottomRightRadius: 3,
    borderTopRightRadius: 3,
    display: 'flex',
    alignItems: 'center',
    height: ({ size }: InputActionStyleProps) => theme.size[size],
    overflow: 'hidden'
  },
  image: {
    maxWidth: theme.size.large,
    objectFit: 'cover'
  }
}))

export default styles

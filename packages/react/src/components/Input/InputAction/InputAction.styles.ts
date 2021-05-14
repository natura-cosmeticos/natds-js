import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { InputProps } from '../Input.props'

const styles = createUseStyles((theme: Theme) => ({
  container: {
    marginRight: ({ action }: InputProps) => action === 'icon' && theme.spacing.tiny
  },
  wrapper: {
    borderBottomRightRadius: 3,
    borderTopRightRadius: 3,
    display: 'flex',
    alignItems: 'center',
    height: ({ size }: InputProps) => size && theme.size[size],
    overflow: 'hidden'
  },
  image: {
    maxWidth: theme.size.large,
    objectFit: 'cover'
  }
}))

export default styles

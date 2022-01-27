import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { AvatarProps } from './Avatar.props'

type AvatarStyleProps = Required<Pick<AvatarProps, 'className'>>

const styles = createUseStyles((theme: Theme) => ({
  avatar: {
  },
  label: {
  },
  icon: {
  }
}))

export default styles

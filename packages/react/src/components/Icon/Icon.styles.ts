import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { IconProps } from './Icon.props'

type IconStyleProps = Required<Pick<IconProps, 'size' | 'color' >>

const styles = createUseStyles((theme: Theme) => ({
  icon: {
    color: ({ color }: IconStyleProps) => theme.color[color],
    fontSize: ({ size }: IconStyleProps) => theme.size[size],
    fontFamily: 'natds-icons',
    fontStyle: 'normal',
    userSelect: 'none'
  }
}))

export default styles

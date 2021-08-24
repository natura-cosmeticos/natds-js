import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { IconProps } from './Icon.props'

type IconStyleProps = Required<Pick<IconProps, 'size' | 'color' >>

const styles = createUseStyles((theme: Theme) => ({
  icon: {
    color: ({ color }: IconStyleProps) => theme.color[color],
    fontFamily: 'natds-icons',
    fontSize: ({ size }: IconStyleProps) => theme.size[size],
    pointerEvents: 'none',
    userSelect: 'none'
  }
}))

export default styles

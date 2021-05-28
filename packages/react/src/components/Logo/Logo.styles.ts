import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { LogoProps } from './Logo.props'

const styles = createUseStyles((theme: Theme) => ({
  root: {
    '& svg': {
      height: '100%',
      width: ({ size }: LogoProps) => size && theme.size[size],
      '& path': {
        fill: ({ color }: LogoProps) => color !== 'neutral' && color && theme.color[color]
      }
    }
  }
}))

export default styles

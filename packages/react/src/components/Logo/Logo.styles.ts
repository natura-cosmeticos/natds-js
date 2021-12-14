import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { LogoProps } from './Logo.props'

type LogoStyleProps = Required<Pick<LogoProps, 'size' | 'color'>>

const styles = createUseStyles((theme: Theme) => ({
  root: {
    '& svg': {
      height: '100%',
      width: ({ size }: LogoStyleProps) => theme.size[size],
      '& path': {
        fill: ({ color }: LogoStyleProps) => color !== 'neutral' && theme.color[color]
      }
    }
  }
}))

export default styles

import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { CounterProps } from './Counter.props'

const styles = createUseStyles((theme: Theme) => ({
  root: {
    '& svg': {
      height: '100%',
      width: ({ size }: CounterProps) => size && theme.size[size],
      '& path': {
        fill: ({ color }: CounterProps) => color !== 'neutral' && color && theme.color[color]
      }
    }
  }
}))

export default styles

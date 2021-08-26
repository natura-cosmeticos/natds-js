import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { CounterProps } from './Counter.props'

const styles = createUseStyles((theme: Theme) => ({

    buttonBase: {
      backgroundColor: "transparent",
      outline: 0,
      appearance: "none",
      height: ({size}: CounterProps) => size && theme.size[size],
      width:  ({size}: CounterProps) => size && size === "semi" ? theme.size[size] : theme.size.semiX,
      borderRadius: 4,
    },

    inputBase: {
      textAlign: 'center',
      height: ({size}: CounterProps) => size && theme.size[size],
      width:  ({size}: CounterProps) => size && size === "semi" ? theme.size[size] : theme.size.semiX
    }
    
}))

export default styles

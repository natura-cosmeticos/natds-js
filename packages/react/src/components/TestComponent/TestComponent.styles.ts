import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

type StylesProps = {
  color: 'primary' | 'secondary'
}

const setBaseStyle = (theme: Theme) => ({ color }: StylesProps) => ({
  color: theme.color.lowEmphasis,
  background: theme.color[color]
})

const styles = createUseStyles((theme: Theme) => ({
  wrapper: (props: StylesProps) => ({
    ...setBaseStyle(theme)(props)
  })
}))

export default styles

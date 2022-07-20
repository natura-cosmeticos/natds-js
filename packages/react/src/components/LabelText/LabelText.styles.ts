import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

type StyleProps = {
  hasError: boolean
}

const baseStyle = (theme: Theme) => ({ hasError }: StyleProps) => ({
  color: !hasError ? theme.color.highEmphasis : 'red',
  background: !hasError ? 'transparent' : 'blue'
})

const styles = createUseStyles((theme: Theme) => ({
  description: (props: StyleProps) => ({
    fontSize: theme.body1.fontSize,
    fontFamily: theme.typography.display.fontFamily,
    ...baseStyle(theme)(props)
  })
}))

export default styles

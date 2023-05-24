import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

const styles = createUseStyles((theme: Theme) => ({
  labelContainer: {
    fontFamily: [`"${theme.typography.body.regular.fontFamily}"`, theme.typography.fallback.fontFamily],
    color: theme.color.highlight
  }
}))

export default styles

import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

const hasBorder = (theme: Theme) => ({
  border: `solid 1px ${theme.color.link}`
})

const styles = createUseStyles((theme: Theme) => ({
  wrapper: {
    display: 'flex',
    padding: theme.spacing.small,
    borderRadius: theme.alert.borderRadius,
    color: theme.color.link,
    background: `${theme.color.link}29`,
    ...hasBorder(theme)
  }
}))

export default styles

import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { StepBarProps } from './StepBar.props'

type RuleNames =
  | 'container'

const styles = createUseStyles<RuleNames, StepBarProps, Theme>((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // gap: 8,
    // padding: 16,
    boxSizing: 'border-box',
    width: '100%',
    height: 76,
    backgroundColor: theme.color.surface
  },
  '@media screen and (max-width: 780px)': {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 4,
      boxSizing: 'border-box',
      width: '100%',
      height: 76,
      backgroundColor: theme.color.surface
    }
  }
}))

export default styles

import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { LogoProps } from './Logo.props'

const styles = createUseStyles((theme: Theme) => ({
  root: {
    width: ({ size }: LogoProps) => size && theme.size[size],
    height: '100%',
  }
}))

export default styles

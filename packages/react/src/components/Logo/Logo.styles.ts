import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { LogoProps } from './Logo.props'

const styles = createUseStyles((theme: Theme) => ({
  root: {
    height: ({ size }: LogoProps) => size && theme.size[size]
  }
}))

export default styles

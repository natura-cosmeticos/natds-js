import createStyles from '../../styles/createStyles'
import { makeStyles } from '../../styles/makeStyles'
import { LogoProps } from './Logo.props'
import { IThemeWeb } from '../../Themes'

const styles = ({ sizes, color: pallete }: IThemeWeb) => createStyles({
  root: {
    '& svg': {
      height: '100%',
      width: ({ size }: LogoProps) => size && sizes[size],
      '& path': {
        fill: ({ color }: LogoProps) => color !== 'neutral' && color && pallete[color]
      }
    }
  }
})

export const useStyles = makeStyles(styles, { name: 'NatDSLogo' })
export default useStyles

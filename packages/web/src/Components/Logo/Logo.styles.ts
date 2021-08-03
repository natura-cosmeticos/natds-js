import createStyles from '../../styles/createStyles'
import { makeStyles } from '../../styles/makeStyles'
import { ILogoProps } from './Logo.props'
import { IThemeWeb } from '../../Themes'

const getLogoSize = (theme: IThemeWeb) => ({ size }: ILogoProps) => size && theme.sizes && `${theme.sizes[size]}px`
const getLogoColor = (theme: IThemeWeb) => ({ color }: ILogoProps) => color !== 'neutral' && theme.color && color && theme.color[color]

const styles = (theme: IThemeWeb) => createStyles({
  root: {
    '& svg': {
      height: '100%',
      width: getLogoSize(theme),
      '& path': {
        fill: getLogoColor(theme)
      }
    }
  }
})

export const useStyles = makeStyles(styles, { name: 'NatDSLogo' })
export default useStyles

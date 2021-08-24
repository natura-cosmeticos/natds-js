import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { IThemeWeb } from '../../Themes'
import { IFormHelperTextProps } from './FormHelperText.props'

const style = ({ typography, palette, sizes }: IThemeWeb) => createStyles({
  root: {
    ...typography.caption,
    alignItems: 'center',
    color: ({ state }: IFormHelperTextProps) => {
      if (state === 'error') {
        return palette?.error?.main
      }
      if (state === 'success') {
        return palette?.success?.main
      }

      return palette?.text?.secondary
    },
    display: 'flex',
    lineHeight: '1.2em',
    padding: `${sizes?.micro}px ${sizes?.none} ${sizes?.none}`
  },
  icon: {
    height: sizes?.small,
    marginRight: sizes?.micro,
    width: sizes?.small
  }
})

export const useStyles = makeStyles(style, { name: 'NatDSFormHelperText' })

export default useStyles

import { createStyles, makeStyles } from '@material-ui/core'
import { IThemeWeb } from '../../../Themes'

const style = (theme: IThemeWeb) => createStyles({
  listItem: {
    borderRadius: theme.shape?.borderRadius,
    cursor: 'pointer',
    padding: theme.sizes?.tiny,
    '&:hover': {
      backgroundColor: theme.palette?.action?.hover
    }
  },
  iconItem: {
    marginRight: theme.sizes?.standard,
    marginTop: theme.sizes?.none,
    minWidth: 'auto'
  },
  subheader: {
    backgroundColor: `${theme.palette?.background?.paper}`,
    borderTop: `${theme.palette?.action?.hover} 1px solid`,
    margin: `${theme.sizes?.small}px -${theme.sizes?.tiny}px 0`
  },
  linkItem: {
    alignItems: 'center',
    all: 'inherit',
    color: 'inherit',
    display: 'flex',
    textDecoration: 'none',
    width: '100%'
  }
})

export const useStyles = makeStyles(style, { name: 'NatDSMenuItemText' })

export default useStyles

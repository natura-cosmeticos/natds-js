import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { DividerProps } from './Divider.props'

type DividerStyleProps = Required<Pick<DividerProps, 'variant'>>

const isFullBleed = ({ variant }: DividerStyleProps) => variant === 'full-bleed'
const isMiddle = ({ variant }: DividerStyleProps) => variant === 'middle'

const styles = createUseStyles((theme: Theme) => ({
  divider: {
    border: 0,
    height: 1,
    backgroundColor: theme.color.lowEmphasis,
    marginTop: 0,
    marginBottom: 0,
    marginRight: (props) => (isMiddle(props) ? theme.spacing.standard : 0),
    marginLeft: (props) => (isFullBleed(props) ? 0 : theme.spacing.standard)
  }
}))

export default styles

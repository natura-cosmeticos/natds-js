import MaterialFormHelperText from '@material-ui/core/FormHelperText'
import * as React from 'react'
import { IconName } from '@naturacosmeticos/natds-icons'
import { IFormHelperTextProps } from './FormHelperText.props'
import { Icon } from '../Icon'
import useStyles from './FormHelperText.styles'

export { IFormHelperTextProps } from './FormHelperText.props'

export const FormHelperText = React.forwardRef<HTMLParagraphElement, IFormHelperTextProps>(
  (props: IFormHelperTextProps, ref) => {
    const { state, children, ...otherProps } = props
    const classes = useStyles({ state })

    let stateIconName: IconName = 'filled-default-mockup'

    if (state === 'error') {
      stateIconName = 'outlined-alert-cancel'
    }

    if (state === 'success') {
      stateIconName = 'outlined-alert-check'
    }

    return (
      <MaterialFormHelperText className={classes.root} ref={ref} {...otherProps}>
        {state && <Icon className={classes.icon} name={stateIconName} size="micro" />}
        {children}
      </MaterialFormHelperText>
    )
  }
)
FormHelperText.displayName = 'FormHelperText'

export default FormHelperText

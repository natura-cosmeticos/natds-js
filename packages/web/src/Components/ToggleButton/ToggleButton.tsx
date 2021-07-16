import * as React from 'react'
import IconButton from '../IconButton'
import { IToggleButtonProps } from './ToggleButton.props'

export { IToggleButtonProps } from './ToggleButton.props'

/**
 * ## Importing
 *
 * ```
 * import { ToggleButton } from '@naturacosmeticos/natds-web';
 * ```
 */
export const ToggleButton = React.forwardRef<HTMLButtonElement, IToggleButtonProps>((
  props: IToggleButtonProps, ref
) => {
  const {
    checked = false,
    iconOff,
    iconOn,
    onClick,
    ...otherProps
  } = props

  const icon : React.ReactNode = checked ? iconOn : iconOff

  return (
    <IconButton
      onClick={onClick}
      {...otherProps}
      ref={ref}
    >
      {icon}
    </IconButton>
  )
})

ToggleButton.displayName = 'ToggleButton'

export default ToggleButton

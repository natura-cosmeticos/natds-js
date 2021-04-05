import React from 'react'
import { RippleProps } from '../Ripple.props'

export const Ripple = ({
  children,
  ...props
}: RippleProps): JSX.Element => <div {...props}>{children}</div>

export default Ripple

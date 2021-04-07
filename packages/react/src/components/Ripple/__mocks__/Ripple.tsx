import React from 'react'
import { RippleProps } from '../Ripple.props'

export const Ripple = ({ children }: RippleProps): JSX.Element => <div data-testid="ripple">{children}</div>

export default Ripple

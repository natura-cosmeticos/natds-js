import React from 'react'
import { PortalProps } from '../Portal'

export const Portal = ({ children }: PortalProps): JSX.Element => (<div data-testid="ds-portal">{children}</div>)

export default Portal

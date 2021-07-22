import { ReactPortal, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
  children: React.ReactNode
  container?: Element | (() => Element | null) | null
}

export const Portal = ({ children, container }: PortalProps): ReactPortal | null => {
  const [mountNode, setMountNode] = useState<Element | null>()

  useEffect(() => {
    const element = container || document.body
    return setMountNode(element)
  }, [container])

  return mountNode ? createPortal(children, mountNode) : null
}

export default Portal

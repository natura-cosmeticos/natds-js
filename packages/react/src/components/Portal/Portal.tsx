import { memo, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
  children: React.ReactNode
  id: string | undefined
}

export const Portal = ({ children, id = 'root' }: PortalProps) => {
  const [container] = useState(document.getElementById(id) || document.createElement('div'))

  useEffect(() => {
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [])

  return createPortal(children, container)
}

export default memo(Portal)

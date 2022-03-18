import { createUseStyles } from 'react-jss'
import type { CollapseProps } from './Collapse.props'

const styles = createUseStyles({
  collapse: ({ open }: CollapseProps) => ({
    overflow: 'hidden',
    height: open ? 'auto' : 0,
    /**
     * NOTE: this is a trick for the transition to be visible
     * because if we use height as transition type, we would also
     * need to set height manually, instead we use max-height
     */
    maxHeight: open ? '100vh' : 0,
    transition: 'max-height 0.3s ease-in-out'
  })
})

export default styles

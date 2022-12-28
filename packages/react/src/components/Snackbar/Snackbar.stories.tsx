import React, { useRef, useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { Snackbar, SnackbarProps } from '.'
import { refProp } from './Snackbar'
import Button from '../Button'
import Icon from '../Icon'

const componentStatus = `
- - -

**NOTE FOR UXs**: This component is available in the following variants:

- ✅ Standard

With the following attribute statuses:

  - **Attributes:**
  - ✅ Title
  - ✅ Icon
  - ✅ Action Button
  - ✅ Feedback
  - ✅ Position
  - ✅ Timer
  - ✅ Animation
  - ✅ buttonComponent


- - -
`

export default {
  title: 'Components/Snackbar',
  component: Snackbar,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<SnackbarProps> = (args) => {
  const [btnStatusD, setBtnStatus] = useState(false)
  const snackRef = useRef<refProp>(null)
  const btnStatus = () => {
    setBtnStatus(true)
    setTimeout(() => {
      setBtnStatus(false)
    }, 2000)
  }
  return (
    <>
      <Snackbar
        {...args}
        ref={snackRef}
        buttonComponent={(
          <Button
            onClick={() => ''}
            variant="contained"
          >
            <span>Default</span>
          </Button>
        )}
        icon={
          <Icon name="outlined-default-mockup" color="surface" />
      }
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae veritat!
      </Snackbar>
      <Button
        disabled={btnStatusD}
        onClick={() => {
          btnStatus()
          return snackRef.current ? snackRef.current.show() : ''
        }}
      >
        Click
      </Button>
    </>
  )
}

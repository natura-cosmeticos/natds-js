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
  - ✅ directionButton
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
export const WithIcon: Story<SnackbarProps> = (args) => {
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
        icon={
          // eslint-disable-next-line react/destructuring-assignment
          <Icon name="outlined-default-mockup" color={args.feedback === 'warning' ? 'highlight' : 'surface'} />
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

export const WithButton: Story<SnackbarProps> = (args) => {
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
      //   icon={
      //     <Icon name="outlined-default-mockup" color="surface" />
      // }
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
export const WithIconButton: Story<SnackbarProps> = (args) => {
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
          // eslint-disable-next-line react/destructuring-assignment
          <Icon name="outlined-default-mockup" color={args.feedback === 'warning' ? 'highlight' : 'surface'} />
        )}
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

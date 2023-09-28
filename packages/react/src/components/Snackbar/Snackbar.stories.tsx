import React, { useRef, useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { Snackbar, SnackbarProps } from '.'
import { refProp } from './Snackbar'
import Button from '../Button'
import Icon from '../Icon'

const componentStatus = `

> Snackbar component is used for instant notifications

## Properties
| Property              | Values                                                                      |    Status       |
|---                    |                                                                          ---|              ---|
| **variant**           | Standard                                                                    | ✅ Ready        |
| **Title**             | any string                                                                  | ✅ Ready        |
| **Icon**              | Component Icon                                                              | ✅ Ready        |
| **directionButton**   | none, inlineButton, blockButton                                             | ✅ Ready        |
| **Feedback**          | default, success, error, warning, info,                                     | ✅ Ready        |
| **Position**          | topLeft, topCenter, topRight, <br />bottomLeft, bottomCenter, bottomRight   | ✅ Ready        |
| **Timer**             | number                                                                      | ✅ Ready        |
| **Animation**         | true/false                                                                  | ✅ Ready        |
| **buttonComponent**   | Component Button                                                            | ✅ Ready        |

## Technical Usages Examples
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

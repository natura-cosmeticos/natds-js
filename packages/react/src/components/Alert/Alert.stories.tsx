import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Alert, AlertProps } from '.'

const componentStatus = `
> Alert allows you to display notification or warning messages on the user interface

## Properties
| Property                      | Values                                 |    Status           |
|---                            |                                     ---|                  ---|
| **variant**                   | standard                               | ✅ Available        |
| **type**                      | contained, outlined                    | ✅ Available        |
| **color**                     | info, success, error, warning, custom  | ✅ Available        |
| **title**                     | string                                 | ✅ Available        |
| **customIcon**                | icon-name                              | ✅ Available        |
| **showIcon**                  | true/false                             | ✅ Available        |
| **customBackgroundColor**     | string                                 | ✅ Available        |
| **customTextColor**           | string                                 | ✅ Available        |
| **customIconColor**           | string                                 | ✅ Available        |
| **customBorderColor**         | string                                 | ✅ Available        |


## Technical Usages Examples

`

export default {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<AlertProps> = (args) => (
  <Alert {...args} title="Title">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  </Alert>
)

export const WithoutIcon: Story<AlertProps> = (args) => (
  <Alert {...args} title="Title" showIcon={false}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  </Alert>
)

export const WithoutTitle: Story<AlertProps> = (args) => (
  <Alert {...args}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  </Alert>
)

export const Custom: Story<AlertProps> = (args) => (
  <Alert
    {...args}
    customIcon="outlined-default-mockup"
    type="outlined"
    color="custom"
    customBackgroundColor="#FF00FF"
    customBorderColor="#FF00FF"
    customIconColor="#FF00FF"
    customTextColor="#FF00FF"
  >
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  </Alert>
)

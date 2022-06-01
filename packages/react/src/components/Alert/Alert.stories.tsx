import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Alert, AlertProps } from '.'

const componentStatus = `
- - -

**NOTE FOR UXs**: This component is available in the following variants:

  - ✅ Standard

With the following attribute statuses:

  - **Attributes:**
    - ✅ Color
    - ✅ Type
    - ✅ Title
    - ✅ CustomIcon
    - ✅ ShowIcon
    - ✅ CustomBackgroundColor
    - ✅ CustomTextColor
    - ✅ CustomIconColor
    - ✅ CustomBorderColor

- - -
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
  <Alert {...args} title="Title">
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

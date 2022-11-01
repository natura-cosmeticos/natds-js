import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Snackbar, SnackbarProps } from '.'

const componentStatus = `
- - -

**NOTE FOR UXs**: This component is available in the following variants:

  - ❌ Standard

With the following attribute statuses:

  - **Attributes:**
    - ❌ \`Types\`

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

export const SnackBarText: Story<SnackbarProps> = (args) => (
  <Snackbar {...args} 
    text="Lorem, ipsum dolor sit amet consectetur adipisicing elit." 
    showIcon={false}
  />
)

export const SnackBarFull: Story<SnackbarProps> = (args) => (
  <Snackbar {...args} 
    text="Lorem, ipsum dolor sit amet consectetur adipisicing elit." 
    title="Title"
    buttonText="DEFAULT"
  />
)

export const Custom: Story<SnackbarProps> = (args) => (
  <Snackbar
    {...args}
  />
)

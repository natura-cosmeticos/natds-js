import React from 'react'
import { Story, Meta } from '@storybook/react'
import Icon from '../Icon'
import { Alert, AlertProps } from '.'

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
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

const MockIcon = <Icon size="standard" name="outlined-default-mockup" color="highEmphasis" />

export const Playground: Story<AlertProps> = (args) => (
  <Alert {...args} title="Title" icon={MockIcon}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  </Alert>
)

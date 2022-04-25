import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Tab, TabProps } from '.'
import Icon from '../Icon'

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
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<TabProps> = (args) => (
  <Tab {...args} />
)

Playground.args = {
  items: [{
    isActive: true,
    component: <>tab 1</>
  },
  {
    component:
  <>
    <Icon size="standard" name="outlined-default-mockup" color="highEmphasis" />
    tab 2
  </>
  }]
}

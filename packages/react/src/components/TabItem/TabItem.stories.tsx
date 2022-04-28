import React from 'react'
import { Story, Meta } from '@storybook/react'
import { TabItem, TabItemProps } from '.'

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
  title: 'Components/TabItem',
  component: TabItem,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<TabItemProps> = (args) => (
  <TabItem {...args} />
)

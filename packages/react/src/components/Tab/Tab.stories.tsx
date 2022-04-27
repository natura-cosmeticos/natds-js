import React from 'react'
import { Story, Meta } from '@storybook/react'
import TabItem from '../TabItem'
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
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta

const onClick = () => console.log('Tab is clicked')

export const Playground: Story<TabProps> = (args) => (
  <Tab {...args}>
    <TabItem onClick={onClick} isActive>
      <Icon size="standard" name="outlined-default-mockup" color="highEmphasis" />
      Tab 1
    </TabItem>
    <TabItem onClick={onClick}>
      <Icon size="standard" name="outlined-default-mockup" color="highEmphasis" />
      Tab 2
    </TabItem>
    <TabItem onClick={onClick} isDisabled>
      <Icon size="standard" name="outlined-default-mockup" color="highEmphasis" />
      Tab 3
    </TabItem>
  </Tab>
)

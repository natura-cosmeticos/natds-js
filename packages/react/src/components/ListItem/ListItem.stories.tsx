import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ListItem, ListItemProps } from '.'

const componentStatus = `
---

**NOTE FOR UXs**: This component is available in the following variants:

  - ❌ \`base\`

With the following attribute status:

- ❌ **OnClick**
- ❌ **Selected**
- ❌ **Feedback**
- ✅ **Divider**

---
`

export default {
  title: 'Components/ListItem',
  component: ListItem,
  parameters: {
    componentSubtitle:
      'Lists are continuous, vertical indexes of content such as text and images.',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta

export const Playground: Story<ListItemProps> = (args) => (<ListItem {...args} />)
Playground.args = {
  children: 'List Item text',
  onClick: () => console.log('I was pressed')
}

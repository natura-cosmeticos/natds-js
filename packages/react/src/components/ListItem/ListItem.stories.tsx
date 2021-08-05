import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { ListItem, ListItemProps } from '.'
import { Divider as DividerComponent } from '../Divider'

const componentStatus = `
---

**NOTE FOR UXs**: This component is available in the following variants:

  - ✅ \`base\`

With the following attribute status:

- ✅ **OnClick**
- ✅ **Selected**
- ✅ **Feedback**
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

const items = [
  { id: 'luca', title: 'Luca' },
  { id: 'cruella', title: 'Cruella' },
  { id: 'black-widow', title: 'Black Widow' },
  { id: 'mulan', title: 'Mulan' }
]

export const Playground: Story<ListItemProps> = (args) => {
  const [selected, setSelected] = useState('')

  return (
    <ul style={{ margin: 0, padding: 0 }}>
      {items.map(({ id, title }) => (
        <ListItem
          {...args}
          key={id}
          selected={title === selected}
          onClick={() => setSelected(title)}
        >
          {title}
        </ListItem>
      ))}
    </ul>
  )
}

export const Feedback: Story<ListItemProps> = Playground.bind({})
Feedback.args = {
  ...Playground.args,
  feedback: 'selection'
}

export const Divider: Story<ListItemProps> = Playground.bind({})
Divider.args = {
  ...Playground.args,
  SeparatorComponent: <DividerComponent />
}

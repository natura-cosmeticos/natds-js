import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { useTheme } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { ListItem, ListItemProps } from '.'
import { Divider as DividerComponent } from '../Divider'

const componentStatus = `
> Lists are continuous, vertical indexes of content such as text and images.

## Properties
| Property                  | Values                     |    Status           |
|---                        |                         ---|                  ---|
| **variant (no prop)**     | base                       | ✅ Available        |
| **interaction**           | none, action, selectable   | ✅ Available        |
| **key**                   | string, number             | ✅ Available        |
| **onClick**               | function                   | ✅ Available        |
| **selected**              | true/false                 | ✅ Available        |
| **SeparatorComponent**    | component                  | ✅ Available        |

## Technical Usages Examples
`

export default {
  title: 'Components/ListItem',
  component: ListItem,
  parameters: {
    componentSubtitle:
      '',
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
  const theme: Theme = useTheme()

  return (
    <ul style={{ margin: 0, padding: 0 }}>
      {items.map(({ id, title }) => (
        <ListItem {...args} key={id} aria-label={`${id}`}>
          <span style={{ color: theme.color.onSurface }}>
            {title}
          </span>
        </ListItem>
      ))}
    </ul>
  )
}
Playground.args = {
  interaction: 'none',
  selected: false
}

export const InteractionAction: Story<ListItemProps> = Playground.bind({})
InteractionAction.args = {
  interaction: 'action',
  onClick: () => console.log('something happened!')
}

export const InteractionSelectable: Story<ListItemProps> = (args) => {
  const [selected, setSelected] = useState('')
  const theme: Theme = useTheme()

  return (
    <ul style={{ margin: 0, padding: 0 }}>
      {items.map(({ id, title }) => (
        <ListItem
          {...args}
          key={id}
          selected={title === selected}
          onClick={() => setSelected(title)}
        >
          <span style={{ color: theme.color.onSurface }}>
            {title}
          </span>
        </ListItem>
      ))}
    </ul>
  )
}
InteractionSelectable.args = {
  interaction: 'selectable'
}

export const Divider: Story<ListItemProps> = Playground.bind({})
Divider.args = {
  ...Playground.args,
  SeparatorComponent: <DividerComponent />
}

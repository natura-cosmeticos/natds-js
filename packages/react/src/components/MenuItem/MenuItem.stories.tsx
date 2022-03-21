import React from 'react'
import { Story, Meta } from '@storybook/react'
import { MenuItem, MenuItemProps } from '.'

const componentStatus = `
---

**NOTE FOR UXs**: This component is available in the following variants:

  - ❌ Standard

With the following attribute statuses:

  - ✅ **Submenu**
  - ❌ **Actived**
  - ❌ **Selected**
  - ❌ **Disabled**
  - ✅ **Add** (available but with alternative composition)
  - **Action**
      - ✅ \`left\` (available but with alternative composition)
      - ✅ \`right\` (available but with alternative composition)

---
`

export default {
  title: 'Components/MenuItem',
  component: MenuItem,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<MenuItemProps> = (args) => (
  <ul style={{ padding: 0, margin: 0 }}>
    <MenuItem {...args} />
  </ul>
)
Playground.args = {
  children: 'Menu Item'
}

export const Submenu: Story<MenuItemProps> = Playground.bind({})
Submenu.args = {
  ...Playground.args,
  submenu: true
}

export const Disabled: Story<MenuItemProps> = Playground.bind({})
Disabled.args = {
  ...Playground.args,
  disabled: true
}

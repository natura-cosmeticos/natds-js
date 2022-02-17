import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Shortcut, ShortcutProps } from '.'
import { Icon } from '../Icon'

const componentStatus = () => `
- - -

**NOTE FOR UXs**: This component is available in the following variants:

  - ✅ \`contained\`
  - ✅ \`outlined\`

With the following attribute statuses:

  - ✅  **Notify**
  - **Color:**
    - ✅ \`primary\`
    - ✅ \`neutral\`
  - ✅  **Disabled**

- - -
`

export default {
  title: 'Components/Shortcut',
  component: Shortcut,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<ShortcutProps> = (args) => (
  <Shortcut {...args} />
)
Playground.args = {
  label: 'Your label',
  IconComponent: <Icon size="semi" name="outlined-default-mockup" color="highEmphasis" />
}

import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '.'

const componentStatus = `
---

**NOTE FOR UXs**: This component is available in the following variants:

  - ✅ \`standard\`

With the following attribute status:

- **Type**
    - ✅ \`icon\`
    - ✅ \`label\`
    - ✅ \`image\`
- **Size**
    - ✅ \`standard\`
    - ✅ \`semi\`
    - ✅ \`semiX\`
    - ✅ \`medium\`
    - ✅ \`largeXXX\`

---
`

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    componentSubtitle: 'Avatars are used to identify a user',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<AvatarProps> = (args) => (
  <Avatar {...args} />
)

export const Types: Story<AvatarProps> = (args) => (
  <div style={{ display: 'flex', gap: 8 }}>
    <Avatar type="image" {...args} />
    <Avatar type="icon" {...args} />
    <Avatar type="label" {...args} />
  </div>
)

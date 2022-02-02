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
Playground.args = {
  src: '/img_placeholder.png'
}

export const Types: Story<AvatarProps> = () => (
  <div style={{ display: 'flex', gap: 8 }}>
    <Avatar type="image" src="/img_placeholder.png" />
    <Avatar type="icon" />
    <Avatar type="label" />
  </div>
)

export const Sizes: Story<AvatarProps> = () => (
  <>
    <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
      <Avatar type="image" src="/img_placeholder.png" size="standard" />
      <Avatar type="image" src="/img_placeholder.png" size="semi" />
      <Avatar type="image" src="/img_placeholder.png" size="semiX" />
      <Avatar type="image" src="/img_placeholder.png" size="medium" />
      <Avatar type="image" src="/img_placeholder.png" size="largeXXX" />
    </div>
    <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
      <Avatar type="icon" size="standard" />
      <Avatar type="icon" size="semi" />
      <Avatar type="icon" size="semiX" />
      <Avatar type="icon" size="medium" />
      <Avatar type="icon" size="largeXXX" />
    </div>
    <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
      <Avatar type="label" size="standard" />
      <Avatar type="label" size="semi" />
      <Avatar type="label" size="semiX" />
      <Avatar type="label" size="medium" />
      <Avatar type="label" size="largeXXX" />
    </div>
  </>
)

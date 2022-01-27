import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '.'

const componentStatus = `
---

**NOTE**: This component is available in the following variants:

  - ✅ \`full-bleed\`
  - ✅ \`inset\`
  - ✅ \`middle\`

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
  <Template>
    <Avatar {...args} />
  </Template>
)

const Template: React.FC = ({ children }) => (
  <div style={{ maxWidth: 200, border: '1px solid #00000014', padding: '16px 0' }}>
    {children}
  </div>
)

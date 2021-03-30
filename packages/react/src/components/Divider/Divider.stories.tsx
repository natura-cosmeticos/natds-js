import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Divider, DividerProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `
---

**NOTE**: This component is available in the following variants:

  - ✅ full-bleed
  - ✅ inset
  - ✅ middle

---
`

export default {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    componentSubtitle: 'A divider is a thin line that groups content in lists and layouts',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<DividerProps> = (args) => (
  <Template>
    <Divider {...args} />
  </Template>
)

export const FullBleed: Story<DividerProps> = (args) => (
  <Template>
    <Divider {...args} variant="full-bleed" />
  </Template>
)
FullBleed.args = { ...Playground.args }

export const Inset: Story<DividerProps> = (args) => (
  <Template>
    <Divider {...args} variant="inset" />
  </Template>
)
FullBleed.args = { ...Playground.args }

export const Middle: Story<DividerProps> = (args) => (
  <Template>
    <Divider {...args} variant="middle" />
  </Template>
)
FullBleed.args = { ...Playground.args }

const Template = ({ children }) => (
  <div style={{ maxWidth: 200, border: '1px solid #00000014', padding: '16px 0' }}>
    {children}
  </div>
)

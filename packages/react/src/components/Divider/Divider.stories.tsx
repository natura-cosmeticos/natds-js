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

export const Playground: Story<DividerProps> = (args) => <Divider {...args} />

export const Variants: Story<DividerProps> = (args) => (
  <StoryContainer isColumn>
    <Divider {...args} variant="full-bleed" />
    <Divider {...args} variant="inset" />
    <Divider {...args} variant="middle" />
  </StoryContainer>
)
Variants.args = { ...Playground.args }

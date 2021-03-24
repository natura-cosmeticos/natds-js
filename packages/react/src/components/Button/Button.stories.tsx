import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Button, ButtonProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `
---

**NOTE**: This component is available in the following variants:

  - ✅ contained
  - ❌ outlined
  - ❌ text

With the following attribute status:

- **Size:**
    - ✅ \`semi\`
    - ✅ \`semiX\`
    - ✅ \`medium\`
- ❌ **Icon**
- ✅ **Disabled**
- **Display**:
    - ✅ \`inline\`
    - ✅ \`block\`

---
`

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Buttons allow users to take actions, and make choices, with a single tap',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<ButtonProps> = (args) => <Button {...args} />
Playground.args = { label: 'button' }

export const Variants: Story<ButtonProps> = () => <Button label="contained" variant="contained" />

export const Sizes: Story<ButtonProps> = () => (
  <StoryContainer>
    <Button label="semi" size="semi" />
    <Button label="semiX" size="semiX" />
    <Button label="medium" size="medium" />
  </StoryContainer>
)

export const Display: Story<ButtonProps> = (args) => (
  <StoryContainer>
    <Button {...args} display="block" label="block" />
    <Button {...args} label="inline" />
  </StoryContainer>
)

export const Disabled: Story<ButtonProps> = (args) => <Button {...args} label="disabled" disabled />

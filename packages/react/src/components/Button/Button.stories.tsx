import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Button, ButtonProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `
---

**NOTE**: This component is available in the following variants:

  - ✅ contained
  - ✅ outlined
  - ✅ text

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

export const Variants: Story<ButtonProps> = () => (
  <StoryContainer>
    <Button label="contained" variant="contained" />
    <Button label="outlined" variant="outlined" />
    <Button label="text" variant="text" />
  </StoryContainer>
)

export const Sizes: Story<ButtonProps> = () => (
  <StoryContainer>
    <Button label="semi" size="semi" />
    <Button label="semiX" size="semiX" />
    <Button label="medium" size="medium" />
  </StoryContainer>
)

export const Disabled: Story<ButtonProps> = (args) => <Button {...args} label="disabled" disabled />

export const FullWidth: Story<ButtonProps> = Playground.bind({})
FullWidth.args = { ...Playground.args, fullWidth: true }

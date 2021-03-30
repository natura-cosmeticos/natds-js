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

// export default {
//   title: 'Components/Button',
//   component: Button,
//   parameters: {
//     componentSubtitle:
//       'Buttons allow users to take actions, and make choices, with a single tap',
//     docs: { description: { component: componentStatus } }
//   }
// } as Meta

export const Template: Story<ButtonProps> = (args) => <Button {...args} />
Template.args = { label: 'button' }

export const Variants: Story<ButtonProps> = (args) => (
  <StoryContainer>
    <Button {...args} variant="contained" />
    <Button {...args} variant="outlined" />
    <Button {...args} variant="text" />
  </StoryContainer>
)
Variants.args = { ...Template.args }

export const Sizes: Story<ButtonProps> = (args) => (
  <StoryContainer>
    <Button {...args} size="semi" />
    <Button {...args} size="semiX" />
    <Button {...args} size="medium" />
  </StoryContainer>
)
Sizes.args = { ...Template.args }

export const Disabled: Story<ButtonProps> = (args) => <Button {...args} />
Disabled.args = { ...Template.args, disabled: true }

export const FullWidth: Story<ButtonProps> = Template.bind({})
FullWidth.args = { ...Template.args, fullWidth: true }

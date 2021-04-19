import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Button, ButtonProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `
---

**NOTE**: This component is available in the following variants:

  - ✅ \`contained\`
  - ✅ \`outlined\`
  - ✅ \`text\`

With the following attribute status:

- **Size**
    - ✅ \`semi\`
    - ✅ \`semiX\`
    - ✅ \`medium\`
- ✅ **Icon**
- ✅ **Disabled**
- **Display**
    - ✅ \`inline\`
    - ✅ \`block\`

---
`

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    componentSubtitle:
      'Buttons allow users to take actions, and make choices, with a single tap',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta

export const Playground: Story<ButtonProps> = (args) => <Button {...args} onClick={() => console.log('clicked!')} />
Playground.args = { text: 'button' }

export const Variants: Story<ButtonProps> = (args) => (
  <StoryContainer>
    <Button {...args} variant="contained" />
    <Button {...args} variant="outlined" />
    <Button {...args} variant="text" />
  </StoryContainer>
)
Variants.args = { ...Playground.args }

export const Sizes: Story<ButtonProps> = (args) => (
  <StoryContainer>
    <Button {...args} size="semi" />
    <Button {...args} size="semiX" />
    <Button {...args} size="medium" />
  </StoryContainer>
)
Sizes.args = { ...Playground.args }

export const Disabled: Story<ButtonProps> = (args) => (
  <StoryContainer>
    <Button {...args} variant="contained" />
    <Button {...args} variant="outlined" />
    <Button {...args} variant="text" />
  </StoryContainer>
)

Disabled.args = { ...Playground.args, disabled: true }

export const Icon: Story<ButtonProps> = (args) => (
  <StoryContainer>
    <Button {...args} />
    <Button {...args} iconPosition="right" />
  </StoryContainer>
)
Icon.args = { ...Playground.args, showIcon: true }

export const FullWidth: Story<ButtonProps> = Playground.bind({})
FullWidth.args = { ...Playground.args, fullWidth: true }

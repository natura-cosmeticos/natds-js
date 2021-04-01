import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Button, ButtonProps } from '.'

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
    componentSubtitle:
      'Buttons allow users to take actions, and make choices, with a single tap',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<ButtonProps> = (args) => <Button {...args} />
Playground.args = { label: 'button' }

export const Variants: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} variant="contained" />
    <div style={{ margin: 8 }} />
    <Button {...args} variant="outlined" />
    <div style={{ margin: 8 }} />
    <Button {...args} variant="text" />
  </>
)
Variants.args = { ...Playground.args }

export const Sizes: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} size="semi" />
    <div style={{ margin: 8 }} />
    <Button {...args} size="semiX" />
    <div style={{ margin: 8 }} />
    <Button {...args} size="medium" />
  </>
)
Sizes.args = { ...Playground.args }

export const Disabled: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} variant="contained" />
    <div style={{ margin: 8 }} />
    <Button {...args} variant="outlined" />
    <div style={{ margin: 8 }} />
    <Button {...args} variant="text" />
  </>
)
Disabled.args = { ...Playground.args, disabled: true }

export const FullWidth: Story<ButtonProps> = Playground.bind({})
FullWidth.args = { ...Playground.args, fullWidth: true }

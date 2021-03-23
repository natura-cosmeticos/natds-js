import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Button, ButtonProps } from '.'

const componentStatus = `
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
- ❌ **Disabled**
- **Display**:
    - ✅ \`inline\`
    - ❌ \`block\`
`

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Buttons allow users to take actions, and make choices, with a single tap',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const All: Story<ButtonProps> = (args) => <Button {...args} />

All.args = { label: 'button' }

export const Sizes: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} label="semi" size="semi" />
    &nbsp;&nbsp;
    <Button {...args} label="semiX" />
    &nbsp;&nbsp;
    <Button {...args} label="medium" size="medium" />
  </>
)

import React from 'react'
import { Story, Meta } from '@storybook/react'
import { TextField, TextFieldProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `
---

**NOTE**: This component is available with the following attribute status:

- **Size**
  - ✅ \`medium\`
  - ✅ \`mediumX\`
- **Feedback**
  - ✅ \`error\`
  - ✅ \`success\`
- ❌ **Required**
- ❌ **Disabled**
- ❌ **ReadOnly**
- ❌ **HelperText**
- **Action**
  - ❌ \`iconButton \`
  - ❌ \`image \`
- **Type**
  - ❌ \`password \`
  - ❌ \`multiline \`
  - ❌ \`text \`

---
`

export default {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    componentSubtitle: 'Text fields let users enter and edit text',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<TextFieldProps> = (args) => (
  <TextField {...args} />
)
Playground.args = { helperText: 'Helper text', label: 'Label' }

export const Size: Story<TextFieldProps> = (args) => (
  <StoryContainer>
    <TextField {...args} />
    <TextField {...args} size="medium" />
  </StoryContainer>
)

Size.args = { ...Playground.args }

export const Feedback: Story<TextFieldProps> = (args) => (
  <StoryContainer>
    <TextField {...args} />
    <TextField {...args} feedback="error" />
    <TextField {...args} feedback="success" />
  </StoryContainer>
)

Feedback.args = { ...Playground.args }

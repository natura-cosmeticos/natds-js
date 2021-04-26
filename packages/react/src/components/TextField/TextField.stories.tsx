import React from 'react'
import { Story, Meta } from '@storybook/react'
import { TextField, TextFieldProps } from '.'

const componentStatus = `
---

**NOTE**: This component is available with the following attribute status:

- **Size**
  - ❌ \`medium\`
  - ❌ \`mediumX\`
- **Feedback**
  - ❌ \`error\`
  - ❌ \`success\`
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

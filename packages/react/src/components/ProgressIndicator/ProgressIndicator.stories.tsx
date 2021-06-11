/* eslint-disable max-len */
import React from 'react'
import { Story, Meta } from '@storybook/react'
import StoryContainer from '../../helpers/StoryContainer'
import { ProgressIndicator, ProgressIndicatorProps } from '.'

const componentStatus = `
---

**NOTE**: This component is available in the following variant:

  - ✅ \`circular\`
  - ❌ \`linear \`

With the following attribute status:

- **Size**
  - ✅  \`standard\`
  - ✅  \`semi\`
  - ✅  \`medium\`
  - ✅  \`large\`
- ✅ **Layer**

---
`

export default {
  title: 'Components/ProgressIndicator',
  component: ProgressIndicator,
  parameters: {
    componentSubtitle: 'Progress indicators express an unspecified wait time.',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<ProgressIndicatorProps> = (args) => <ProgressIndicator {...args} />

export const Size: Story<ProgressIndicatorProps> = (args) => (
  <StoryContainer>
    <ProgressIndicator {...args} size="standard" />
    <ProgressIndicator {...args} size="semi" />
    <ProgressIndicator {...args} />
    <ProgressIndicator {...args} size="large" />
  </StoryContainer>
)
export const Backdrop: Story<ProgressIndicatorProps> = (args) => (
  <div style={{
    alignItems: 'center',
    backgroundColor: '#00000099',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center'
  }}
  >
    <ProgressIndicator {...args} />
  </div>
)
Backdrop.args = { ...Playground.args, showBackdrop: true }

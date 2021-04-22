import React from 'react'
import { Story, Meta } from '@storybook/react'
import { IconButton, IconButtonProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `
---

**NOTE**: This component is available with the following attribute status:

- **Color**
  - ✅ \`primary\`
  - ✅ \`highEmphasis\`
- **Size**
  - ✅ \`semi\`
  - ✅ \`semiX\`
  - ✅ \`medium\`
- **Background Style**
  - ✅ \`none\`
  - ✅ \`float\`
  - ✅ \`overlay\`
- ✅  **Disabled**

---
`

export default {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    componentSubtitle: 'Icon button allow users to take actions, and make choices, with a single tap.',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta

export const Playground: Story<IconButtonProps> = (args) => <IconButton {...args} onClick={() => console.log('clicked!')} />
Playground.args = { iconName: 'outlined-default-mockup' }

export const Color: Story<IconButtonProps> = (args) => (
  <StoryContainer>
    <IconButton {...args} />
    <IconButton {...args} color="primary" />
    <IconButton {...args} color="surface" />
  </StoryContainer>
)

export const Size: Story<IconButtonProps> = (args) => (
  <StoryContainer>
    <IconButton {...args} />
    <IconButton {...args} size="semiX" />
    <IconButton {...args} size="medium" />
  </StoryContainer>
)

export const BackgroundStyle: Story<IconButtonProps> = (args) => (
  <StoryContainer>
    <IconButton {...args} />
    <IconButton {...args} backgroundStyle="float" />
    <IconButton {...args} backgroundStyle="overlay" />
  </StoryContainer>
)

export const Disabled: Story<IconButtonProps> = (args) => (
  <StoryContainer>
    <IconButton {...args} />
    <IconButton {...args} backgroundStyle="float" />
    <IconButton {...args} backgroundStyle="overlay" />
  </StoryContainer>
)
Disabled.args = { ...Playground.args, disabled: true }

import React from 'react'
import { Story, Meta } from '@storybook/react'
import { IconButton, IconButtonProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'
import { Icon } from '../Icon'

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
Playground.args = {
  IconComponent: <Icon size="standard" name="outlined-default-mockup" color="highEmphasis" />
}

export const Color: Story<IconButtonProps> = (args) => (
  <StoryContainer>
    <IconButton {...args} />
    <IconButton
      {...args}
      IconComponent={<Icon size="standard" name="outlined-default-mockup" color="primary" />}
    />
    <IconButton
      {...args}
      IconComponent={<Icon size="standard" name="outlined-default-mockup" color="surface" />}
    />
  </StoryContainer>
)
Color.args = {
  ...Playground.args
}

export const Size: Story<IconButtonProps> = (args) => (
  <StoryContainer>
    <IconButton {...args} />
    <IconButton
      {...args}
      size="semiX"
      IconComponent={<Icon size="semi" name="outlined-default-mockup" color="highEmphasis" />}
    />
    <IconButton
      {...args}
      size="medium"
      IconComponent={<Icon size="semiX" name="outlined-default-mockup" color="highEmphasis" />}
    />
  </StoryContainer>
)
Size.args = {
  ...Playground.args
}

export const BackgroundStyle: Story<IconButtonProps> = (args) => (
  <StoryContainer>
    <IconButton {...args} />
    <IconButton {...args} backgroundStyle="float" />
    <IconButton {...args} backgroundStyle="overlay" />
  </StoryContainer>
)
BackgroundStyle.args = {
  ...Playground.args
}

export const Disabled: Story<IconButtonProps> = (args) => (
  <StoryContainer>
    <IconButton
      {...args}
      IconComponent={<Icon size="standard" name="outlined-default-mockup" color="mediumEmphasis" />}
    />
    <IconButton
      {...args}
      backgroundStyle="float"
      IconComponent={<Icon size="standard" name="outlined-default-mockup" color="mediumEmphasis" />}
    />
    <IconButton
      {...args}
      backgroundStyle="overlay"
      IconComponent={<Icon size="standard" name="outlined-default-mockup" color="lowEmphasis" />}
    />
  </StoryContainer>
)
Disabled.args = { ...Playground.args, disabled: true }

import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Shortcut, ShortcutProps } from '.'
import { Icon } from '../Icon'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = () => `
- - -

**NOTE FOR UXs**: This component is available in the following variants:

  - ✅ \`contained\`
  - ✅ \`outlined\`

With the following attribute statuses:

  - ✅  **Notify**
  - **Color:**
    - ✅ \`primary\`
    - ✅ \`neutral\`
  - ✅  **Disabled**

- - -
`

export default {
  title: 'Components/Shortcut',
  component: Shortcut,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<ShortcutProps> = (args) => (
  <Shortcut {...args} />
)
Playground.args = {
  label: 'your label',
  IconComponent: <Icon size="semi" name="outlined-default-mockup" color="highEmphasis" />
}

export const Color: Story<ShortcutProps> = (args) => (
  <StoryContainer>
    <Shortcut {...args} id="contained-primary" />
    <Shortcut {...args} id="contained-neutral" color="neutral" />
    <Shortcut {...args} id="outlined-primary" variant="outlined" />
    <Shortcut {...args} id="outlined-neutral" variant="outlined" color="neutral" />
  </StoryContainer>
)
Color.args = { ...Playground.args }

export const Disabled: Story<ShortcutProps> = (args) => (
  <StoryContainer>
    <Shortcut
      {...args}
      variant="contained"
      disabled
      IconComponent={<Icon size="semi" name="outlined-default-mockup" color="mediumEmphasis" />}
    />
    <Shortcut
      {...args}
      variant="outlined"
      disabled
      IconComponent={<Icon size="semi" name="outlined-default-mockup" color="lowEmphasis" />}
    />
  </StoryContainer>
)
Disabled.args = {
  ...Playground.args
}

export const Notify: Story<ShortcutProps> = (args) => (
  <Shortcut {...args} notify value={99} limit={99} />
)
Notify.args = {
  ...Playground.args
}

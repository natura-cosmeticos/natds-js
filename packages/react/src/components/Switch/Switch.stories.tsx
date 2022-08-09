import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { Switch, SwitchProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `
- - -

**NOTE FOR UXs**: This component is available in the following variants:

  - ✅ Standard

With the following attribute statuses:

  - ✅  **Disabled**
  UPDATE

- - -
`

export default {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    componentSubtitle: 'Switches allow users to enable or disable an option.',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<SwitchProps> = ({ checked, ...args }) => {
  const [check, setCheck] = useState(checked)

  return <Switch {...args} checked={check} onChange={() => setCheck(!check)} />
}

export const Disabled: Story<SwitchProps> = (args) => (
  <StoryContainer>
    <Switch {...args} checked={false} id="firstSwitch" />
    <Switch {...args} checked id="secondSwitch" />
  </StoryContainer>
)
Disabled.args = {
  ...Playground.args,
  disabled: true
}

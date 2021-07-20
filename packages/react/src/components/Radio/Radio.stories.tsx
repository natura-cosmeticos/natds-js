/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { Radio, RadioProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `
---

**NOTE**: This component is available with the following attribute status:

  - ✅ **Disabled**

---
`

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    componentSubtitle: 'Radio buttons allow users to select one option from a set.',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta

export const Playground: Story<RadioProps> = (args) => {
  const [check, setCheck] = useState(args.checked)

  return (
    <Radio {...args} checked={check} onChange={() => setCheck(!check)} />
  )
}
Playground.args = { testID: 'ds-radio', checked: false }

export const Disabled: Story<RadioProps> = (args) => (
  <StoryContainer>
    <Radio {...args} disabled />
    <Radio {...args} disabled checked />
  </StoryContainer>
)
Disabled.args = { ...Playground.args }

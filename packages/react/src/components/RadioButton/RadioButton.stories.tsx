/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { RadioButton, RadioButtonProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `
---

**NOTE**: This component is available with the following attribute status:

  - ✅ **Disabled**

---
`

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    componentSubtitle: 'Radio buttons allow users to select one option from a set.',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta

export const Playground: Story<RadioButtonProps> = (args) => {
  const [check, setCheck] = useState(args.checked)

  return (
    <RadioButton {...args} checked={check} onChange={() => setCheck(!check)} />
  )
}
Playground.args = { testID: 'ds-radio', checked: false }

export const Disabled: Story<RadioButtonProps> = (args) => (
  <StoryContainer>
    <RadioButton {...args} disabled />
    <RadioButton {...args} disabled checked />
  </StoryContainer>
)
Disabled.args = { ...Playground.args }

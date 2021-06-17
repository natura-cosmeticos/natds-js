/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { Checkbox, CheckboxProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `
---

**NOTE**: This component is available with the following attribute status:

  - ✅ **Disabled**
  - ✅ **Indeterminate**

---
`

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    componentSubtitle: 'Checkboxes allow users to select one or more items from a set.',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta

export const Playground: Story<CheckboxProps> = (args) => {
  const [check, setCheck] = useState(args.checked)

  return (
    <Checkbox {...args} checked={check} onChange={() => setCheck(!check)} />
  )
}
Playground.args = { testID: 'ds-checkbox', checked: false }

export const Variants: Story<CheckboxProps> = (args) => {
  const [check1, setCheck1] = useState(true)
  const [check2, setCheck2] = useState(true)

  return (
    <StoryContainer>
      <Checkbox {...args} checked={check1} onChange={() => setCheck1(!check1)} />
      <Checkbox {...args} checked={check2} onChange={() => setCheck2(!check2)} indeterminate />
    </StoryContainer>
  )
}
Variants.args = { ...Playground.args }

export const Disabled: Story<CheckboxProps> = (args) => (
  <StoryContainer>
    <Checkbox {...args} disabled />
    <Checkbox {...args} disabled checked />
    <Checkbox {...args} disabled checked indeterminate />
  </StoryContainer>
)
Disabled.args = { ...Playground.args }

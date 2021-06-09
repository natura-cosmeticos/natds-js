import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { Checkbox, CheckboxProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `
---

**NOTE**: This component is available in the following variants:

  - ❌ \`standard\`
  - ❌ \`indeterminated\`

With the following attribute status:

- ❌ **Disabled**

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
  const [check, setCheck] = useState(false)

  return (
    <Checkbox {...args} checked={check} onChange={() => setCheck(!check)} />
  )
}
Playground.args = { id: 'ds-checkbox' }

export const Variants: Story<CheckboxProps> = (args) => {
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)

  return (
    <StoryContainer>
      <Checkbox {...args} checked={check1} onChange={() => setCheck1(!check1)} />
      <Checkbox {...args} checked={check2} onChange={() => setCheck2(!check2)} variant="indeterminated" />
    </StoryContainer>
  )
}
Variants.args = { ...Playground.args }

export const Disabled: Story<CheckboxProps> = (args) => (
  <StoryContainer>
    <Checkbox {...args} disabled />
    <Checkbox {...args} disabled checked />
    <Checkbox {...args} disabled checked variant="indeterminated" />
  </StoryContainer>
)
Disabled.args = { ...Playground.args }

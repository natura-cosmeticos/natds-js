import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { RadioButton, RadioButtonProps } from '.'

const componentStatus = `
---

**NOTE FOR UXs**: This component is available with the following attribute status:

  - ✅ **Disabled**

---
`

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    componentSubtitle: 'RadioButton buttons allow users to select one option from a set.',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta

export const Playground: Story<RadioButtonProps> = ({ checked, ...args }) => {
  const [check, setCheck] = useState(checked)

  return (
    <RadioButton {...args} checked={check} onChange={() => setCheck(!check)} />
  )
}
Playground.args = { checked: false, label: 'Example' }

export const Disabled: Story<RadioButtonProps> = (args) => (
  <>
    <RadioButton {...args} />
    <RadioButton {...args} checked />
  </>
)
Disabled.args = { ...Playground.args, disabled: true }

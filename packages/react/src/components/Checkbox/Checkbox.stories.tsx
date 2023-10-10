import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { Checkbox, CheckboxProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `
> Checkboxes allow users to select one or more items from a set.

## Properties
| Property                    | Values            |    Status           |
|---                          |                ---|                  ---|
| **disabled**                | true/false        | ✅ Available        |
| **indeterminate**           | true/false        | ✅ Available        |
| **checked**                 | true/false        | ✅ Available        |
| **value**                   | string            | ✅ Available        |
| **onChange**                | function          | ✅ Available        |
| **label**                   | string            | ✅ Available        |
| **id**                      | string            | ✅ Available        |
| **brand**                   | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |

## Technical Usages Examples
`

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta

export const Playground: Story<CheckboxProps> = ({ checked, ...args }) => {
  const [check, setCheck] = useState(checked)

  return (
    <Checkbox {...args} checked={check} onChange={() => setCheck(!check)} />
  )
}
Playground.args = {
  checked: false,
  label: 'Example'
}

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
    <Checkbox {...args} />
    <Checkbox {...args} checked />
    <Checkbox {...args} checked indeterminate />
  </StoryContainer>
)
Disabled.args = {
  ...Playground.args,
  disabled: true
}

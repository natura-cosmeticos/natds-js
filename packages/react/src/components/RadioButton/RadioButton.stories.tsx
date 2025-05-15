import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { RadioButton, RadioButtonProps } from '.'

const componentStatus = `
> RadioButton allow users to select one option from a set.

## Properties
| Property                      | Values                           |    Status           |
|---                            |                               ---|                  ---|
| **variant(no prop)**          | Standard                         | ✅ Available        |
| **disabled**                  | true/false                       | ✅ Available        |
| **id**                        | string                           | ✅ Available        |
| **label**                     | string                           | ✅ Available        |
| **name**                      | string                           | ✅ Available        |
| **onBlur**                    | function                         | ✅ Available        |
| **onChange**                  | function                         | ✅ Available        |
| **onFocus**                   | function                         | ✅ Available        |
| **required**                  | true/false                       | ✅ Available        |
| **value**                     | string                           | ✅ Available        |
| **brand**                     | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |

## Technical Usages Examples
`

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    componentSubtitle: '',
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
Playground.args = { checked: false, label: 'Example', ariaLabel: 'Example' }

export const Choose: Story<RadioButtonProps> = ({ checked, ...args }) => {
  const showFocus = checked ? 0 : 1
  const [check, setCheck] = useState(showFocus)

  return (
    <>

      <RadioButton {...args} label="Example1" checked={check === 1} onChange={() => setCheck(1)} />
      <RadioButton {...args} label="Example2" checked={check === 2} onChange={() => setCheck(2)} />
      <RadioButton {...args} label="Example3" checked={check === 3} onChange={() => setCheck(3)} />

    </>
  )
}
Choose.args = { checked: false, label: 'Example' }

export const Disabled: Story<RadioButtonProps> = (args) => (
  <>
    <RadioButton {...args} />
    <RadioButton {...args} checked />
  </>
)
Disabled.args = { ...Playground.args, disabled: true }

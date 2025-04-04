import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Select, SelectProps, OptionProps } from '.'

const componentStatus = `
> Allow users to choose an option from a predefined list.

## Properties
| Property                      | Values                                        |    Status           |
|---                            |                                            ---|                  ---|
| **variant (no prop)**         | Standard                                      | ✅ Available        |
| **label**                     | string                                        | ✅ Available        |
| **name**                      | string                                        | ✅ Available        |
| **placeholder**               | string                                        | ✅ Available        |
| **options**                   | [{value: string, label: string}]              | ✅ Available        |
| **size**                      | medium, mediumX                               | ✅ Available        |
| **value**                     | string                                        | ✅ Available        |
| **helperText**                | string                                        | ✅ Available        |
| **feedback**                  | success, error                                | ✅ Available        |
| **required**                  | true/false                                    | ✅ Available        |
| **disabled**                  | true/false                                    | ✅ Available        |
| **onChange**                  | function                                      | ✅ Available        |
| **brand**                     | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |

## Technical Usages Examples
`

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

const options: OptionProps[] = [{
  value: '1',
  label: 'Option 1'
},
{
  value: '2',
  label: 'Option 2'
}]

export const Playground: Story<SelectProps> = (args) => (
  <Select {...args} label="Label" options={options} />
)

export const WithPlaceholder: Story<SelectProps> = (args) => (
  <Select {...args} label="Label" placeholder="Placeholder" options={options} helperText="Helper Text" />
)

export const WithHelperText: Story<SelectProps> = (args) => (
  <Select {...args} label="Label" options={options} helperText="Helper Text" />
)

export const HasError: Story<SelectProps> = (args) => (
  <Select {...args} label="Label" options={options} feedback="error" helperText="Helper Text" />
)

export const HasSuccess: Story<SelectProps> = (args) => (
  <Select {...args} label="Label" options={options} feedback="success" helperText="Helper Text" />
)

export const Required: Story<SelectProps> = (args) => (
  <Select {...args} label="Label" options={options} required />
)

export const Disabled: Story<SelectProps> = (args) => (
  <Select {...args} label="Label" options={options} disabled />
)

export const Accessibility: Story<SelectProps> = (args) => (
  <Select
    {...args}
    label="Label"
    options={options}
    accessibility={{
      'aria-label': 'Gaya Area-Label',
      'aria-labelledby': 'Gaya Area-labeldby',
      'aria-describedby': 'Gaya Area-Describedy',
      'aria-disabled': false,
      'aria-required': false,
      'aria-invalid': false,
      role: 'Select',
      tabIndex: 1
    }}
  />
)

import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Select, SelectProps, OptionProps } from '.'

const componentStatus = `
- - -

**NOTE FOR UXs**: This component is available in the following variants:

  - ✅ Standard

With the following attribute statuses:

  - **Attributes:**
    - ✅ Label
    - ✅ Name
    - ✅ Placeholder
    - ✅ Options
    - ✅ Size
    - ✅ HelperText
    - ✅ Feedback
    - ✅ Required
    - ✅ Disabled

- - -
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

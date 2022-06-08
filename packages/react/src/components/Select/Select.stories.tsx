import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Select, SelectProps, OptionProps } from '.'

const componentStatus = `
- - -

**NOTE FOR UXs**: This component is available in the following variants:

  - ❌ Standard

With the following attribute statuses:

  - **Attributes:**
    - ❌ \`Types\`

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
  <Select {...args} label="All options" name="option" options={options} />
)

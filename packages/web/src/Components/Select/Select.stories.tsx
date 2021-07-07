/* eslint-disable complexity */
import { Meta, Story } from '@storybook/react'
import * as React from 'react'
import { Select as component } from './Select'
import { ISelectProps } from './Select.props'

const Select: React.ForwardRefExoticComponent<ISelectProps> = React.lazy(() => import('./Select'))

export default {
  component,
  title: 'Components/Select'
} as Meta

const options = ['option 1', 'option 2', 'option 3']

const Template: Story<ISelectProps> = (args: ISelectProps) => {
  const [value, setValue] = React.useState(args.value)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string)
  }

  return (
    <Select
      onChange={handleChange}
      value={args.value || value}
      options={args.options || options}
      label={args.label || 'Label'}
      helpText={args.helpText || 'Assistive text'}
      id={args.id || 'demo-select'}
      placeholder={args.placeholder || 'Placeholder'}
      {...args}
    />
  )
}

export const Playground: Story<ISelectProps> = Template.bind({})
Playground.args = {
  disabled: false,
  helpText: 'Helper Text',
  label: 'Label',
  required: false,
  options,
  placeholder: 'Placeholder'
}

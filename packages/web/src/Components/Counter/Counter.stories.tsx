/* eslint-disable no-plusplus */
import * as React from 'react'
import { Meta, Story } from '@storybook/react'
import { Counter as component, ICounterProps } from './Counter'

const Counter: React.ForwardRefExoticComponent<ICounterProps> = React.lazy(() => import('./Counter'))

export default {
  component,
  title: 'Components/Counter'
} as Meta

const Template: Story<ICounterProps> = (args: ICounterProps) => {
  const [value, setValue] = React.useState(args.value)

  const handleIncrement = () => setValue(value + 1)
  const handleDecrement = () => setValue(value - 1)

  return (
    <div>
      <Counter {...args} onIncrement={handleIncrement} onDecrement={handleDecrement} value={value} />
    </div>
  )
}

export const Playground: Story<ICounterProps> = Template.bind({})
Playground.args = {
  value: 0
}

export const SmallSize: Story<ICounterProps> = Template.bind({})
SmallSize.args = {
  ...Playground.args,
  size: 'small'
}

export const MediumSize: Story<ICounterProps> = Template.bind({})
MediumSize.args = {
  ...Playground.args,
  size: 'medium'
}

export const WithLabel: Story<ICounterProps> = Template.bind({})
WithLabel.args = {
  ...Playground.args,
  size: 'small',
  label: 'Quantidade'
}

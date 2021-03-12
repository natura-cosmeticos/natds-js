import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ButtonProps } from './Button.props'
import Button from '.'

export default {
  title: 'Components/Button',
  component: Button
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button'
}

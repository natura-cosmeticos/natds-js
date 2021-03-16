import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ButtonProps } from './Button.props'
import Button from '.'

export default {
  title: 'Components/Button',
  component: Button
} as Meta

export const Template: Story<ButtonProps> = (args) => <Button {...args} />

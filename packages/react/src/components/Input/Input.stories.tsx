import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Input, InputProps } from '.'

export default {
  title: 'Utilities/Input',
  component: Input,
  parameters: {
    previewTabs: {
      canvas: { hidden: true }
    }
  }
} as Meta

export const Default: Story<InputProps> = (args) => <Input {...args} />
Default.args = {
}

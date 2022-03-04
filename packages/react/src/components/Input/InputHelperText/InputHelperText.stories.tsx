import React from 'react'
import { Story, Meta } from '@storybook/react'
import { InputHelperText, InputHelperTextProps } from '.'

export default {
  title: 'Utilities/InputHelperText',
  component: InputHelperText,
  parameters: {
    previewTabs: {
      canvas: { hidden: true }
    }
  }
} as Meta

export const Default: Story<InputHelperTextProps> = (args) => <InputHelperText {...args} />
Default.args = {
  helperText: 'Helper Text'
}

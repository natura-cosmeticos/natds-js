import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Label, LabelProps } from '.'

export default {
  title: 'Utilities/Label',
  component: Label,
  parameters: {
    previewTabs: {
      canvas: { hidden: true }
    }
  }
} as Meta

export const Default: Story<LabelProps> = (args) => <Label {...args} />
Default.args = {
  label: 'label'
}

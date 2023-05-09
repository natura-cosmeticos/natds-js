import React from 'react'
import { Story, Meta } from '@storybook/react'
import ProgressBar from './ProgressBar'
import { ProgressBarProps } from './ProgressBar.props'

const componentStatus = `
- - -

**NOTE FOR UXs**: This is exemplo template:
- - -
`

export default {
  title: 'TeamComponents/ProgressBar',
  component: ProgressBar,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<ProgressBarProps> = (args) => (
  <div style={{ maxWidth: '50%', padding: '24px' }}>

    <ProgressBar {...args} />
  </div>

)
Playground.args = {
  point: 30,
  minPoint: 30
}

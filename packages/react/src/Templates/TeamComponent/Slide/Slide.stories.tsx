import React from 'react'
import { Story, Meta } from '@storybook/react'
import Slide from './Slide'

const componentStatus = `
- - -

**NOTE FOR UXs**: This is exemplo template:
- - -
`

export default {
  title: 'TeamComponents/Slide',
  component: Slide,
  parameters: {
    componentSubtitle: 'Tags are used to label, categorize, or organize items using keywords that describe them.',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const WhithBrand: Story = () => (
  <div style={{ maxWidth: '50%', padding: '24px' }}>

    <Slide />
  </div>

)

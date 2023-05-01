import React from 'react'
import { Story, Meta } from '@storybook/react'
import CardSlide from '.'

const componentStatus = `
- - -

**NOTE FOR UXs**: This is exemplo template:
- - -
`

export default {
  title: 'TeamComponents/CardSlide',
  component: CardSlide,
  parameters: {
    componentSubtitle: 'Tags are used to label, categorize, or organize items using keywords that describe them.',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const WhithBrand: Story = () => (

  <CardSlide brand="casaEestilo" />

)

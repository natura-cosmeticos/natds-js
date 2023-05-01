import React from 'react'
import { Story, Meta } from '@storybook/react'
import Checkout from './Checkout'

const componentStatus = `
- - -

**NOTE FOR UXs**: This is exemplo template:
- - -
`

export default {
  title: 'Templates/Checkout',
  component: Checkout,
  parameters: {
    componentSubtitle: 'Tags are used to label, categorize, or organize items using keywords that describe them.',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const TemplateCheckout: Story = () => (

  <Checkout />

)
// export const TemplateCheckoutMobile: Story = () => (
//   <div style={{ maxWidth: '360px' }}>

//     <Checkout />
//   </div>

// )

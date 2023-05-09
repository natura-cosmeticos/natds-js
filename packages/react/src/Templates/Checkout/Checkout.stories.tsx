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
    componentSubtitle: 'This is an example of implementing the theme on a checkout page',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story = () => (

  <Checkout />

)
// export const TemplateCheckoutMobile: Story = () => (
//   <div style={{ maxWidth: '360px' }}>

//     <Checkout />
//   </div>

// )

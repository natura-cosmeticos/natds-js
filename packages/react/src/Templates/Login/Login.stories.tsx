import React from 'react'
import { Story, Meta } from '@storybook/react'
import Login, { openIMG } from './Login'

const componentStatus = `
- - -

**NOTE FOR UXs**: This is exemplo template:
- - -
`

export default {
  title: 'Templates/Login',
  component: Login,
  parameters: {
    componentSubtitle: 'This is an example of implementing the theme on a Login page',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<openIMG> = (args) => (

  <Login {...args} />

)
Playground.args = {
  openIMG: false
}

// export const TemplateCheckoutMobile: Story = () => (
//   <div style={{ maxWidth: '360px' }}>

//     <Checkout />
//   </div>

// )

import React from 'react'
import { Story, Meta } from '@storybook/react'
import Home from './Home'

const componentStatus = `
- - -

**NOTE FOR UXs**: This is exemplo template:
- - -
`

export default {
  title: 'Templates/Home',
  component: Home,
  parameters: {
    componentSubtitle: 'This is an example of implementing the theme on a Home page',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story = () => (

  <Home />

)

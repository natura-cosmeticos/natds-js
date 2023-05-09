import React from 'react'
import { Story, Meta } from '@storybook/react'
import Slide from './Slide'
import CardSlide from './CardSlide'
import { dataCartSlide } from '../../mocks/mocks'

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

export const Playground: Story = () => (
  <div style={{ maxWidth: '65%', padding: '24px' }}>

    <Slide>
      {
                dataCartSlide.map((elo) => (

                  <CardSlide
                    prodTitle={elo.prodTitle}
                    brand={elo.brand}
                    theme={elo.theme}
                    code={elo.code}
                    point={elo.point}
                    price={elo.price}
                    url={elo.url}
                  />

                ))
              }
    </Slide>
  </div>

)

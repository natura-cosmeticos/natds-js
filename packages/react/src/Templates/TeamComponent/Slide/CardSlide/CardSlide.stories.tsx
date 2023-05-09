import React from 'react'
import { Story, Meta } from '@storybook/react'
import CardSlide from '.'
import { CardSlideProps } from './CardSlide.props'

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
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta

export const Playground: Story<CardSlideProps> = (args) => (

  <CardSlide
    {...args}
  />

)
Playground.args = {
  prodTitle: 'Refil Desodorante Corporal Kaiak Masculino',
  brand: 'Natura',
  theme: 'natura_v2',
  code: '50999',
  point: 4,
  price: 'S/0.000.00',
  url: 'https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web@latest/dist/assets/product-empty-256x256.png'
}

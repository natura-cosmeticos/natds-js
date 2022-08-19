import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import AccordionItem from '../AccordionItem'
import StoryContainer from '../../helpers/StoryContainer'
import { Accordion, AccordionProps } from '.'

const componentStatus = `
- - -

**NOTE FOR UXs**: This component is available in the following variants:

  - ❌ Standard

With the following attribute statuses:

  - **Attributes:**
    - ❌ \`Types\`

- - -
`

const Item = () => {
  const [isActive, setIsActive] = useState(false)

  const onClick = () => setIsActive(!isActive)

  return (
    <AccordionItem title="Lorem ipsum" isActive={isActive} onClick={onClick}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt,
      ratione alias recusandae error fuga vero obcaecati impedit in dicta esse
      ad debitis iure voluptatem ipsam atque! Quam, doloribus alias!
    </AccordionItem>
  )
}

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<AccordionProps> = (args) => (
  <StoryContainer>
    <Accordion {...args}>
      <Item />
      <Item />
      <Item />
    </Accordion>
  </StoryContainer>
)

import React from 'react'
import { Story, Meta } from '@storybook/react'
import { useState } from '@storybook/addons'
import StoryContainer from '../../helpers/StoryContainer'
import { AccordionItem, AccordionItemProps } from '.'

const componentStatus = `
- - -

**NOTE FOR UXs**: This component is available in the following variants:

  - ❌ Standard

With the following attribute statuses:

  - **Attributes:**
    - ❌ \`Types\`

- - -
`

export default {
  title: 'Components/AccordionItem',
  component: AccordionItem,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<AccordionItemProps> = (args) => {
  const [isActive, setIsActive] = useState(false)

  const onClick = () => setIsActive(!isActive)

  return (
    <StoryContainer>
      <AccordionItem {...args} title="Subtitle 1" isActive={isActive} onClick={onClick}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt,
        ratione alias recusandae error fuga vero obcaecati impedit in dicta esse
        ad debitis iure voluptatem ipsam atque! Quam, doloribus alias!
      </AccordionItem>
    </StoryContainer>
  )
}

export const Primary: Story<AccordionItemProps> = (args) => {
  const [isActive, setIsActive] = useState(true)

  const onClick = () => setIsActive(!isActive)

  return (
    <StoryContainer>
      <AccordionItem {...args} title="Subtitle 1" color="primary" isActive={isActive} onClick={onClick}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt,
        ratione alias recusandae error fuga vero obcaecati impedit in dicta esse
        ad debitis iure voluptatem ipsam atque! Quam, doloribus alias!
      </AccordionItem>
    </StoryContainer>
  )
}

export const Disabled: Story<AccordionItemProps> = (args) => (
  <StoryContainer>
    <AccordionItem {...args} title="Subtitle 1" isDisabled onClick={() => ({})}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt,
      ratione alias recusandae error fuga vero obcaecati impedit in dicta esse
      ad debitis iure voluptatem ipsam atque! Quam, doloribus alias!
    </AccordionItem>
  </StoryContainer>
)

export const Legend: Story<AccordionItemProps> = (args) => {
  const [isActive, setIsActive] = useState(true)

  const onClick = () => setIsActive(!isActive)

  return (
    <StoryContainer>
      <AccordionItem {...args} title="Subtitle 1" legend="Legend" isActive={isActive} onClick={onClick}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt,
        ratione alias recusandae error fuga vero obcaecati impedit in dicta esse
        ad debitis iure voluptatem ipsam atque! Quam, doloribus alias!
      </AccordionItem>
    </StoryContainer>
  )
}

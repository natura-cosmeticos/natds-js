import React from 'react'
import { Story, Meta } from '@storybook/react'
import { useState } from '@storybook/addons'
import StoryContainer from '../../helpers/StoryContainer'
import { AccordionItem, AccordionItemProps } from '.'

const componentStatus = `
> AccordionItem representing an individual item that can be expanded or collapsed in response to user interaction.

## Properties
| Property         | Values                |    Status           |
|---               |                    ---|                  ---|
| **variant**      | standard              | ✅ Available        |
| **title**        | string                | ✅ Available        |
| **legend**       | string                | ✅ Available        |
| **color**        | regular, primary'     | ✅ Available        |
| **isActive**     | true/false            | ✅ Available        |
| **isDisabled**   | true/false            | ✅ Available        |
| **onClick**      | function              | ✅ Available        |
| **brand**        | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo              | ✅ Available        |


## Technical Usages Examples
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
export const Brand: Story<AccordionItemProps> = (args) => {
  const [isActive, setIsActive] = useState(true)

  const onClick = () => setIsActive(!isActive)

  return (
    <StoryContainer>
      <AccordionItem brand="avon_v2" {...args} title="Subtitle 1" color="primary" isActive={isActive} onClick={onClick}>
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

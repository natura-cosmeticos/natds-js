import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Image, ImageProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'
import Typography from '../Typography'

const componentStatus = `
> Image is used to display images in the user interface,.

## Properties
| Property                  | Values                     |    Status           |
|---                        |                         ---|                  ---|
| **variant(no prop)**      | Standard                   | ✅ Available        |
| **sourceImage**           | string                     | ✅ Available        |
| **fallbackImage**         | string                     | ✅ Available        |
| **alternativeText**       | string                     | ✅ Available        |
| **highlight**             | true/false                 | ✅ Available        |
| **fade**                  | top, bottom, right, left   | ✅ Available        |
| **border**                | medium, circle             | ✅ Available        |

## Technical Usages Examples
`

export default {
  title: 'Components/Image',
  component: Image,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<ImageProps> = (args) => (
  <StoryContainer>
    <Image {...args} sourceImage="https://picsum.photos/256">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </Image>
  </StoryContainer>
)

export const Highlight: Story<ImageProps> = (args) => (
  <StoryContainer>
    <Image {...args} highlight sourceImage="https://picsum.photos/256" />
  </StoryContainer>
)

export const WithFade: Story<ImageProps> = (args) => (
  <StoryContainer>
    <Image {...args} highlight fade="top" sourceImage="https://picsum.photos/256" />
    <Image {...args} highlight fade="bottom" sourceImage="https://picsum.photos/256" />
    <Image {...args} highlight fade="right" sourceImage="https://picsum.photos/256" />
    <Image {...args} highlight fade="left" sourceImage="https://picsum.photos/256" />
  </StoryContainer>
)

export const WithFallback: Story<ImageProps> = (args) => (
  <StoryContainer>
    <Image {...args} sourceImage="INVALID_URL" fallbackImage="https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web@latest/dist/assets/product-empty-256x256.png">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </Image>
  </StoryContainer>
)

export const WithComponent: Story<ImageProps> = (args) => (
  <StoryContainer>
    <Image {...args} highlight sourceImage="https://picsum.photos/256">
      <div style={{ color: '#fff' }}>
        <Typography variant="caption">Lorem Ipsum</Typography>
      </div>
    </Image>
  </StoryContainer>
)

export const WithBorder: Story<ImageProps> = (args) => (
  <StoryContainer>
    <Image {...args} sourceImage="https://picsum.photos/256" />
    <Image {...args} border="medium" sourceImage="https://picsum.photos/256" />
    <Image {...args} border="circle" sourceImage="https://picsum.photos/256" />
  </StoryContainer>
)

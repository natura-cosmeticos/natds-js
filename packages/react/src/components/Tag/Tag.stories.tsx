import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Tag, TagProps } from '.'
import { Icon as IconElement } from '../Icon'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = () => `
- - -

**NOTE FOR UXs**: This component is available in the following variants:

  - ❌ Standard

With the following attribute statuses:

  - **Attributes:**
    - ❌ \`Types\`

- - -
`

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<TagProps> = (args) => (
  <Tag {...args} />
)
Playground.args = {
  text: 'Design System'
}

export const Position: Story<TagProps> = () => (
  <StoryContainer>
    <Tag text="Default" />
    <Tag text="Right" borderPosition="right" />
    <Tag text="Left" borderPosition="left" />
  </StoryContainer>
)

export const Color: Story<TagProps> = () => (
  <StoryContainer>
    <Tag text="primary" color="primary" />
    <Tag text="secondary" color="secondary" />
    <Tag text="success" color="success" />
    <Tag text="alert" color="alert" />
    <Tag text="warning" color="warning" />
    <Tag text="link" color="link" />
    <Tag text="custom" customBackgroundColor="#FF00FF" customLabelColor="#FFFFFF" />
  </StoryContainer>
)

export const Size: Story<TagProps> = () => (
  <StoryContainer>
    <Tag text="small" size="small" />
    <Tag text="standard" size="standard" />
  </StoryContainer>
)

export const Icon: Story<TagProps> = () => (
  <StoryContainer>
    <Tag
      text="small"
      size="small"
      IconComponent={<IconElement name="outlined-default-mockup" color="highEmphasis" size="small" />}
    />
    <Tag
      text="standard"
      size="standard"
      IconComponent={<IconElement name="outlined-default-mockup" color="highEmphasis" size="standard" />}
    />
  </StoryContainer>
)

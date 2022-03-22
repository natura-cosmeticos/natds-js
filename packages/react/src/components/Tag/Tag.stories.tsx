import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Tag, TagProps } from '.'
import { Icon as IconElement } from '../Icon'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `
- - -

**NOTE FOR UXs**: This component is available in the following variants:

  - ✅ Standard

With the following attribute statuses:

  - **Attributes:**
  - **Position**
    - ✅ \`center\`
    - ✅ \`right\`
    - ✅ \`left\`
  - **Color**
    - ✅ \`primary\`
    - ✅ \`secondary\`
    - ✅ \`success\`
    - ✅ \`alert\`
    - ✅ \`warning\`
    - ✅ \`link\`
    - ✅ \`custom\`
  - **Size**
    - ✅ \`small\`
    - ✅ \`standard\`
  - ✅ **Icon**

- - -
`

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    componentSubtitle: 'Tags are used to label, categorize, or organize items using keywords that describe them.',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<TagProps> = (args: TagProps) => (
  <Tag {...args} />
)
Playground.args = {
  children: 'Design System'
}

export const Position: Story<TagProps> = () => (
  <StoryContainer>
    <Tag>center</Tag>
    <Tag position="right">right</Tag>
    <Tag position="left">left</Tag>
  </StoryContainer>
)

export const Color: Story<TagProps> = () => (
  <StoryContainer>
    <Tag color="primary">primary</Tag>
    <Tag color="secondary">secondary</Tag>
    <Tag color="success">success</Tag>
    <Tag color="alert">alert</Tag>
    <Tag color="warning">warning</Tag>
    <Tag color="link">link</Tag>
    <Tag customBackgroundColor="#FF00FF" customLabelColor="#FFFFFF">custom</Tag>
  </StoryContainer>
)

export const Size: Story<TagProps> = () => (
  <StoryContainer>
    <Tag size="small">small</Tag>
    <Tag size="standard">standard</Tag>
  </StoryContainer>
)

export const Icon: Story<TagProps> = () => (
  <StoryContainer>
    <Tag
      size="small"
      IconComponent={<IconElement name="outlined-default-mockup" color="highEmphasis" size="small" />}
    >
      small
    </Tag>
    <Tag
      size="standard"
      IconComponent={<IconElement name="outlined-default-mockup" color="highEmphasis" size="standard" />}
    >
      standard
    </Tag>
  </StoryContainer>
)

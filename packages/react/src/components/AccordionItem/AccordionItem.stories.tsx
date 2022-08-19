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
      <AccordionItem {...args} isActive={isActive} onClick={onClick} />
    </StoryContainer>
  )
}

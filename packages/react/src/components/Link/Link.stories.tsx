import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Link, LinkProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `
---

**NOTE for UX**: This component is available in the following variants:

  - ✅ \`regular\`
  - ✅ \`underline\`

---
`

export default {
  title: 'Components/Link',
  component: Link,
  parameters: {
    componentSubtitle: 'The link component allows you to have a pattern for anchor text.',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<LinkProps> = (args) => <Link {...args} />
Playground.args = {
  text: 'Link',
  href: 'https://'
}

export const Variants: Story<LinkProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <Link {...args} variant="regular" text="regular variant example" />
    <Link {...args} variant="underline" text="underline variant example" />
  </div>
)
Variants.args = { ...Playground.args }

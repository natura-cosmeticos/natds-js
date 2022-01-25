import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Link, LinkProps } from '.'
import { Icon } from '../Icon'

const componentStatus = `
---

**NOTE FOR UX**: This component is available in the following variants:

  - ✅ \`regular\`
  - ✅ \`underline\`

With the following attribute status:

  - **Icon**
      - ✅ \`left\`
      - ✅ \`right\`
  - **Color**
      - ✅ \`default\`
      - ✅ \`light\`

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

export const WithIcon: Story<LinkProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <Link
      {...args}
      text="right icon example"
      iconPosition="right"
      IconComponent={<Icon name="outlined-navigation-directionright-alt" color="link" />}
    />
    <Link
      {...args}
      text="left icon example"
      iconPosition="left"
      IconComponent={<Icon name="outlined-navigation-directionleft-alt" color="link" />}
    />
  </div>
)
WithIcon.args = { ...Playground.args }

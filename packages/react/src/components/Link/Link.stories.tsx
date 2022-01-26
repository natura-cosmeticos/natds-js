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
  <>
    <Link {...args} variant="underline" text="underline variant example" />
    <Link {...args} variant="regular" text="regular variant example" />
  </>
)
Variants.args = { ...Playground.args }

export const Colors: Story<LinkProps> = (args) => (
  <>
    <Link {...args} text="default link color" />
    <Link {...args} textColor="light" text="light link color" />
  </>
)
Colors.args = { ...Playground.args }

export const WithIcon: Story<LinkProps> = (args) => (
  <>
    <Link
      {...args}
      text="right icon example"
      IconComponent={<Icon name="outlined-navigation-directionright-alt" color="link" />}
    />
    <Link
      {...args}
      text="left icon example"
      iconPosition="left"
      IconComponent={<Icon name="outlined-navigation-directionleft-alt" color="link" />}
    />
  </>
)
WithIcon.args = { ...Playground.args }

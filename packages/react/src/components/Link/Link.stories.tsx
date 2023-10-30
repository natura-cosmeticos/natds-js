import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Link, LinkProps } from '.'
import { Icon } from '../Icon'

const componentStatus = `
> The link component allows you to have a pattern for anchor text.

## Properties
| Property                  | Values                     |    Status           |
|---                        |                         ---|                  ---|
| **variant**               | regular, underline         | ✅ Available        |
| **href**                  | string href                | ✅ Available        |
| **hrefLang**              | string hrefLang            | ✅ Available        |
| **text**                  | string                     | ✅ Available        |
| **textColor**             | default, light             | ✅ Available        |
| **target**                | target ancor               | ✅ Available        |
| **iconPosition**          | left, right                | ✅ Available        |
| **IconComponent**         | component Icon             | ✅ Available        |


## Technical Usages Examples
`

export default {
  title: 'Components/Link',
  component: Link,
  parameters: {
    componentSubtitle: '',
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

import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Shortcut, ShortcutProps } from '.'
import { Icon } from '../Icon'
import StoryContainer from '../../helpers/StoryContainer'
import Badge from '../Badge'

const componentStatus = `
> Used for quick access to a page and facilitate navigation.

## Properties
| Property                      | Values                                        |    Status           |
|---                            |                                            ---|                  ---|
| **variant**                   | contained , outlined                          | ✅ Available        |
| **ariaLabel**                 | string                                        | ✅ Available        |
| **disabled**                  | true/false                                    | ✅ Available        |
| **onClick**                   | function                                      | ✅ Available        |
| **id**                        | string                                        | ✅ Available        |
| **color**                     | primary, neutral                              | ✅ Available        |
| **IconComponent**             | component Icon                                | ✅ Available        |
| **label**                     | string                                        | ✅ Available        |
| **BadgeComponent**            | component Badge                               | ✅ Available        |
| **breakLine**                 | true/false                                    | ✅ Available        |
| **Notify (no prop)**          | when aply component Badge                     | ✅ Available        |
| **brand**                     | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |

## Technical Usages Examples
`

export default {
  title: 'Components/Shortcut',
  component: Shortcut,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<ShortcutProps> = (args) => (
  <Shortcut {...args} />
)
Playground.args = {
  id: 'shortcut-id',
  label: 'Text Example',
  IconComponent: <Icon size="semi" name="outlined-default-mockup" color="highEmphasis" />
}
export const Brand: Story<ShortcutProps> = (args) => (
  <Shortcut {...args} />
)
Brand.args = {
  id: 'shortcut-id',
  label: 'Text Example',
  IconComponent: <Icon size="semi" name="outlined-default-mockup" color="onPrimary" />
}

export const Color: Story<ShortcutProps> = (args) => (
  <StoryContainer>
    <Shortcut {...args} id="contained-primary" />
    <Shortcut {...args} id="contained-neutral" color="neutral" />
    <Shortcut {...args} id="outlined-primary" variant="outlined" />
    <Shortcut {...args} id="outlined-neutral" variant="outlined" color="neutral" />
  </StoryContainer>
)
Color.args = { ...Playground.args }

export const Disabled: Story<ShortcutProps> = (args) => (
  <StoryContainer>
    <Shortcut
      {...args}
      id="contained-disabled"
      variant="contained"
      disabled
      IconComponent={<Icon size="semi" name="outlined-default-mockup" color="mediumEmphasis" />}
    />
    <Shortcut
      {...args}
      id="outlined-disabled"
      variant="outlined"
      disabled
      IconComponent={<Icon size="semi" name="outlined-default-mockup" color="lowEmphasis" />}
    />
  </StoryContainer>
)
Disabled.args = {
  ...Playground.args
}

export const Notify: Story<ShortcutProps> = (args) => (
  <Shortcut {...args} />
)
Notify.args = {
  ...Playground.args,
  BadgeComponent: <Badge variant="standard" value={99} limit={99} />
}

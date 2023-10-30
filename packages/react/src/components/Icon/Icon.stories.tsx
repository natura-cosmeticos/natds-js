import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Icon, IconProps } from '.'

const componentStatus = `
> A helper component to display icons from @naturacosmeticos/natds-icons package.

## Properties
| Property                      | Values                                       |    Status           |
|---                            |                                           ---|                  ---|
| **ariaHidden**                | true/false                                   | ✅ Available        |
| **ariaLabel**                 | string                                       | ✅ Available        |
| **color**                     | color-name (Support Color tokens from theme) | ✅ Available        |
| **name**                      | icon-name                                    | ✅ Available        |
| **role**                      | img, button                                  | ✅ Available        |
| **size**                      | (Support Size tokens from theme)             | ✅ Available        |
| **brand**                   | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |

## Technical Usages Examples
`

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<IconProps> = (args) => <Icon {...args} />
export const Icons: Story<IconProps> = (args) => <Icon {...args} />

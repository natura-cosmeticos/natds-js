/* eslint-disable max-len */
import React from 'react'
import { Story, Meta } from '@storybook/react'
import StoryContainer from '../../helpers/StoryContainer'
import { ProgressIndicator, ProgressIndicatorProps } from '.'

const componentStatus = `
> Progress indicators express an unspecified wait time.

## Properties
| Property                      | Values                           |    Status           |
|---                            |                               ---|                  ---|
| **variant(no prop)**          | circular                         | ✅ Available        |
| **ariaLabel**                 | string                           | ✅ Available        |
| **showBackdrop**              | true/false                       | ✅ Available        |
| **size**                      | standard, semi, medium, large    | ✅ Available        |
| **Layer**                     | (available but with alternative composition)    | ✅ Available        |
| **brand**                     | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |

## Technical Usages Examples
`

export default {
  title: 'Components/ProgressIndicator',
  component: ProgressIndicator,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<ProgressIndicatorProps> = (args) => <ProgressIndicator {...args} />

export const Size: Story<ProgressIndicatorProps> = (args) => (
  <StoryContainer>
    <ProgressIndicator {...args} size="standard" />
    <ProgressIndicator {...args} size="semi" />
    <ProgressIndicator {...args} />
    <ProgressIndicator {...args} size="large" />
  </StoryContainer>
)
export const Backdrop: Story<ProgressIndicatorProps> = (args) => (
  <div style={{
    alignItems: 'center',
    backgroundColor: '#00000099',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center'
  }}
  >
    <ProgressIndicator {...args} />
  </div>
)
Backdrop.args = { ...Playground.args, showBackdrop: true }

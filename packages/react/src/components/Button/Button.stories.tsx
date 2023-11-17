/* eslint-disable max-len */
import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Button, ButtonProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `

> Buttons allow users to take actions, and make choices, with a single tap.

## Properties
| Property         | Values                                                                          |    Status           |
|---               |                                                                              ---|                  ---|
| **variant**      | contained, outlined, text                                                       | ✅ Available        |
| **textTranform** | uppercase, lowercase,  capitalize                                               | ✅ Available        |
| **size**         | semi, semiX, medium                                                             | ✅ Available        |
| **iconName**     | 'icon_name'                                                                     | ✅ Available        |
| **disabled**     | true, false                                                                     | ✅ Available        |
| **fullWidth**    | true, false                                                                     | ✅ Available        |
| **brand**        | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |
| **color**        | primary, onPrimary, secondary, onSecondary, surfaceInverse, onSurfaceInverse                      | ✅ Available        |

## Technical Usages Examples
`

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta

export const Playground: Story<ButtonProps> = (args) => <Button {...args} />
Playground.args = {
  children: 'button',
  onClick: () => console.log('clicked!')
}

export const Variants: Story<ButtonProps> = (args) => (
  <StoryContainer>
    <Button {...args} variant="contained" />
    <Button {...args} variant="outlined" />
    <Button {...args} variant="text" />
  </StoryContainer>
)
Variants.args = { ...Playground.args }
export const Brands: Story<ButtonProps> = (args) => (
  <div style={{
    display: 'flex', flexDirection: 'column', gap: 20, backgroundColor: '#ccc', padding: 15
  }}
  >
    <StoryContainer>
      <Button brand="avon" {...args} variant="contained" />
      <Button brand="avon" {...args} variant="outlined" />
      <Button brand="avon" {...args} variant="text" />
    </StoryContainer>

    <StoryContainer>
      <Button brand="avon_v2" {...args} variant="contained" />
      <Button brand="avon_v2" {...args} variant="outlined" />
      <Button brand="avon_v2" {...args} variant="text" />
    </StoryContainer>
    <StoryContainer>
      <Button brand="natura" {...args} variant="contained" />
      <Button brand="natura" {...args} variant="outlined" />
      <Button brand="natura" {...args} variant="text" />
    </StoryContainer>
    <StoryContainer>
      <Button brand="natura_v2" {...args} variant="contained" />
      <Button brand="natura_v2" {...args} variant="outlined" />
      <Button brand="natura_v2" {...args} variant="text" />
    </StoryContainer>
    <StoryContainer>
      <Button brand="casaEestilo" {...args} variant="contained" />
      <Button brand="casaEestilo" {...args} variant="outlined" />
      <Button brand="casaEestilo" {...args} variant="text" />
    </StoryContainer>
    <StoryContainer>
      <Button brand="consultoriaDeBeleza" {...args} variant="contained" />
      <Button brand="consultoriaDeBeleza" {...args} variant="outlined" />
      <Button brand="consultoriaDeBeleza" {...args} variant="text" />
    </StoryContainer>
    <StoryContainer>
      <Button brand="theBodyShop" {...args} variant="contained" />
      <Button brand="theBodyShop" {...args} variant="outlined" />
      <Button brand="theBodyShop" {...args} variant="text" />
    </StoryContainer>
  </div>
)
Brands.args = { ...Playground.args }
export const LabelTransform: Story<ButtonProps> = (args) => (
  <StoryContainer>
    <Button {...args} variant="contained" />
    <Button textTransform="capitalize" {...args} variant="contained" />
    <Button textTransform="lowercase" {...args} variant="contained" />
  </StoryContainer>
)
LabelTransform.args = { ...Playground.args }

export const Sizes: Story<ButtonProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <div style={{ display: 'flex', gap: 8 }}>
      <Button {...args} size="semi" />
      <Button {...args} size="semiX" />
      <Button {...args} size="medium" />
    </div>
    <div style={{ display: 'flex', gap: 8 }}>
      <Button {...args} variant="outlined" size="semi" />
      <Button {...args} variant="outlined" size="semiX" />
      <Button {...args} variant="outlined" size="medium" />
    </div>
    <div style={{ display: 'flex', gap: 8 }}>
      <Button {...args} variant="text" size="semi" />
      <Button {...args} variant="text" size="semiX" />
      <Button {...args} variant="text" size="medium" />
    </div>
  </div>
)
Sizes.args = { ...Playground.args }

export const Disabled: Story<ButtonProps> = (args) => (
  <StoryContainer>
    <Button {...args} variant="contained" />
    <Button {...args} variant="outlined" />
    <Button {...args} variant="text" />
  </StoryContainer>
)

Disabled.args = { ...Playground.args, disabled: true }

export const Icon: Story<ButtonProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <div style={{ display: 'flex', gap: 8 }}>
      <Button {...args} showIcon iconName="outlined-default-mockup" iconPosition="left" />
      <Button {...args} showIcon iconName="outlined-default-mockup" />
    </div>
    <div style={{ display: 'flex', gap: 8 }}>
      <Button {...args} variant="outlined" showIcon iconName="outlined-default-mockup" iconPosition="left" />
      <Button {...args} variant="outlined" showIcon iconName="outlined-default-mockup" />
    </div>
    <div style={{ display: 'flex', gap: 8 }}>
      <Button {...args} variant="text" showIcon iconName="outlined-default-mockup" iconPosition="left" />
      <Button {...args} variant="text" showIcon iconName="outlined-default-mockup" />
    </div>
  </div>
)
Icon.args = { ...Playground.args }

export const FullWidth: Story<ButtonProps> = (args) => (
  <div style={{ display: 'flex', gap: 8, flexDirection: 'column' }}>
    <Button {...args} />
    <Button {...args} variant="outlined" />
    <Button {...args} variant="text" />
  </div>
)
FullWidth.args = { ...Playground.args, fullWidth: true }

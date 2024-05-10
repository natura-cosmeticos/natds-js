/* eslint-disable max-len */
import React from 'react'
import { Story, Meta } from '@storybook/react'
import Divider from '../Divider'
import { GayaButton, GayaButtonProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `

> GayaButtons allow users to take actions, and make choices, with a single tap.

## Properties
| Property                   | Values                                                                          |    Status           |
|---                         |                                                                              ---|                  ---|
| **variant**                | filled, outlined, ghost, tonal                                                  | ✅ Available        |
| **textTranform**           | uppercase, lowercase,  capitalize                                               | ✅ Available        |
| **size**                   | semi, semiX, medium                                                             | ✅ Available        |
| **iconName**               | 'icon_name'                                                                     | ✅ Available        |
| **disabled**               | true, false                                                                     | ✅ Available        |
| **fullWidth (Display)**    | true, false                                                                     | ✅ Available        |
| **brand**                  | avon, avon_v2, natura, natura_v2, natura_v3, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |
| **color**                  | primary, onPrimary, secondary, onSecondary, neutral, inverse                     | ✅ Available        |

## Technical Usages Examples
`

export default {
  title: 'Components/GayaButton',
  component: GayaButton,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta

export const Playground: Story<GayaButtonProps> = (args) => <GayaButton {...args} />
Playground.args = {
  children: 'button',
  onClick: () => console.log('clicked!')
}

export const Variants: Story<GayaButtonProps> = (args) => (
  <StoryContainer>
    <GayaButton ariaLabel="Action 1" {...args} variant="filled" />
    <GayaButton ariaLabel="Action 2" {...args} variant="outlined" />
    <GayaButton ariaLabel="Action 3" {...args} variant="ghost" />
    <GayaButton ariaLabel="Action 4" {...args} variant="tonal" />
  </StoryContainer>
)
Variants.args = { ...Playground.args }
export const Brands: Story<GayaButtonProps> = (args) => (
  <div style={{
    display: 'flex', flexDirection: 'column', gap: 20, padding: 15
  }}
  >
    <StoryContainer>
      <GayaButton key={20} brand="natura_v3" {...args} variant="filled" />
      <GayaButton key={30} brand="natura_v3" {...args} variant="outlined" />
      <GayaButton key={40} brand="natura_v3" {...args} variant="ghost" />
      <GayaButton key={40} brand="natura_v3" {...args} variant="tonal" />
    </StoryContainer>

    <Divider />

    <StoryContainer>
      <GayaButton key={10} brand="natura_v2" {...args} variant="filled" />
      <GayaButton key={11} brand="natura_v2" {...args} variant="outlined" />
      <GayaButton key={12} brand="natura_v2" {...args} variant="ghost" />
      <GayaButton key={12} brand="natura_v2" {...args} variant="tonal" />
    </StoryContainer>

    <StoryContainer>
      <GayaButton key={1} brand="avon" {...args} variant="filled" />
      <GayaButton key={2} brand="avon" {...args} variant="outlined" />
      <GayaButton key={3} brand="avon" {...args} variant="ghost" />
      <GayaButton key={3} brand="avon" {...args} variant="tonal" />
    </StoryContainer>

    <StoryContainer>
      <GayaButton key={4} brand="avon_v2" {...args} variant="filled" />
      <GayaButton key={5} brand="avon_v2" {...args} variant="outlined" />
      <GayaButton key={6} brand="avon_v2" {...args} variant="ghost" />
      <GayaButton key={6} brand="avon_v2" {...args} variant="tonal" />
    </StoryContainer>
    <StoryContainer>
      <GayaButton key={7} brand="natura" {...args} variant="filled" />
      <GayaButton key={8} brand="natura" {...args} variant="outlined" />
      <GayaButton key={9} brand="natura" {...args} variant="ghost" />
      <GayaButton key={9} brand="natura" {...args} variant="tonal" />
    </StoryContainer>

    <StoryContainer>
      <GayaButton key={13} brand="casaEestilo" {...args} variant="filled" />
      <GayaButton key={14} brand="casaEestilo" {...args} variant="outlined" />
      <GayaButton key={15} brand="casaEestilo" {...args} variant="ghost" />
      <GayaButton key={15} brand="casaEestilo" {...args} variant="tonal" />
    </StoryContainer>
    <StoryContainer>
      <GayaButton key={16} brand="consultoriaDeBeleza" {...args} variant="filled" />
      <GayaButton key={17} brand="consultoriaDeBeleza" {...args} variant="outlined" />
      <GayaButton key={18} brand="consultoriaDeBeleza" {...args} variant="ghost" />
      <GayaButton key={18} brand="consultoriaDeBeleza" {...args} variant="tonal" />
    </StoryContainer>
    <StoryContainer>
      <GayaButton key={19} brand="theBodyShop" {...args} variant="filled" />
      <GayaButton key={20} brand="theBodyShop" {...args} variant="outlined" />
      <GayaButton key={21} brand="theBodyShop" {...args} variant="ghost" />
      <GayaButton key={21} brand="theBodyShop" {...args} variant="tonal" />
    </StoryContainer>
  </div>
)
Brands.args = { ...Playground.args }
export const LabelTransform: Story<GayaButtonProps> = (args) => (
  <StoryContainer>
    <GayaButton textTransform="uppercase" {...args} variant="contained" />
    <GayaButton textTransform="capitalize" {...args} variant="contained" />
    <GayaButton textTransform="lowercase" {...args} variant="contained" />
  </StoryContainer>
)
LabelTransform.args = { ...Playground.args }

export const Sizes: Story<GayaButtonProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <div style={{ display: 'flex', gap: 8 }}>
      <GayaButton variant="filled" {...args} size="semi" />
      <GayaButton variant="filled" {...args} size="semiX" />
      <GayaButton variant="filled" {...args} size="medium" />
    </div>
    <div style={{ display: 'flex', gap: 8 }}>
      <GayaButton {...args} variant="outlined" size="semi" />
      <GayaButton {...args} variant="outlined" size="semiX" />
      <GayaButton {...args} variant="outlined" size="medium" />
    </div>
    <div style={{ display: 'flex', gap: 8 }}>
      <GayaButton {...args} variant="ghost" size="semi" />
      <GayaButton {...args} variant="ghost" size="semiX" />
      <GayaButton {...args} variant="ghost" size="medium" />
    </div>
    <div style={{ display: 'flex', gap: 8 }}>
      <GayaButton {...args} variant="tonal" size="semi" />
      <GayaButton {...args} variant="tonal" size="semiX" />
      <GayaButton {...args} variant="tonal" size="medium" />
    </div>
  </div>
)
Sizes.args = { ...Playground.args }

export const Disabled: Story<GayaButtonProps> = (args) => (
  <StoryContainer>
    <GayaButton {...args} variant="filled" />
    <GayaButton {...args} variant="outlined" />
    <GayaButton {...args} variant="ghost" />
    <GayaButton {...args} variant="tonal" />
  </StoryContainer>
)

Disabled.args = { ...Playground.args, disabled: true }

export const Icon: Story<GayaButtonProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <div style={{ display: 'flex', gap: 8 }}>
      <GayaButton {...args} showIcon iconName="outlined-default-mockup" iconPosition="left" />
      <GayaButton {...args} showIcon iconName="outlined-default-mockup" />
    </div>
    <div style={{ display: 'flex', gap: 8 }}>
      <GayaButton {...args} variant="outlined" showIcon iconName="outlined-default-mockup" iconPosition="left" />
      <GayaButton {...args} variant="outlined" showIcon iconName="outlined-default-mockup" />
    </div>
    <div style={{ display: 'flex', gap: 8 }}>
      <GayaButton {...args} variant="ghost" showIcon iconName="outlined-default-mockup" iconPosition="left" />
      <GayaButton {...args} variant="ghost" showIcon iconName="outlined-default-mockup" />
    </div>
    <div style={{ display: 'flex', gap: 8 }}>
      <GayaButton {...args} variant="tonal" showIcon iconName="outlined-default-mockup" iconPosition="left" />
      <GayaButton {...args} variant="tonal" showIcon iconName="outlined-default-mockup" />
    </div>
  </div>
)
Icon.args = { ...Playground.args }

export const FullWidth: Story<GayaButtonProps> = (args) => (
  <div style={{ display: 'flex', gap: 8, flexDirection: 'column' }}>
    <GayaButton {...args} />
    <GayaButton {...args} variant="outlined" />
    <GayaButton {...args} variant="ghost" />
    <GayaButton {...args} variant="tonal" />
  </div>
)
FullWidth.args = { ...Playground.args, fullWidth: true }

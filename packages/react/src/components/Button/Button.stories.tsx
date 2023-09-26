import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Button, ButtonProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `

## Config
| Property         | Values                            |    Status       |
|---               |                                ---|              ---|
| **variant**      | contained, outlined, text         | ✅ Available    |
| **textTranform** | uppercase, lowercase,  capitalize | ✅ Available    |
| **size**         | semi, semiX, medium               | ✅ Available    |
| **iconName**     | 'icon_name'                       | ✅ Available    |
| **disabled**     | true, false                       | ✅ Available    |

## Technical Usages Examples
`

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Buttons allow users to take actions, and make choices, with a single tap',
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

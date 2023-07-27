import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Logo, LogoProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `
---

Attribute status:

- **Size**
    - ✅ \`medium\`
    - ✅ \`mediumx\`
    - ✅ \`large\`
    - ✅ \`largex\`
    - ✅ \`largexx\`
    - ✅ \`largexxx\`
    - ✅ \`huge\`
    - ✅ \`hugex\`
    - ✅ \`hugexx\`
    - ✅ \`hugexxx\`
    - ✅ \`veryhuge\`
- **Color**
    - ✅ \`neutral\`
    - ✅ \`primary\`
    - ✅ \`secondary\`
    - ✅ \`highlight\`
    - ✅ \`surface\`
- **Model**
    - ✅ \`primary\`
    - ✅ \`secondary\`
- **Language**
    - ✅ \`default\`
    - ✅ \`es\`
    - ✅ \`pt\`
- **Brand**
    - ✅ \`avon\`
    - ✅ \`avon_v2\`
    - ✅ \`natura\`
    - ✅ \`natura_v2\`
    - ✅ \`theBodyShop\`
    - ✅ \`consultoriaDeBeleza\`
    - ✅ \`casaEestilo\`
    - ✅ \`biome\`
- **Model**
    - ✅ \`light\`
    - ✅ \`dark\`

---
`

export default {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    componentSubtitle: 'Logo adapted as brand standards for each company',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta

export const Playground: Story<LogoProps> = (args) => <Logo {...args} />

export const Size: Story<LogoProps> = (args) => (
  <StoryContainer>
    <Logo {...args} size="medium" />
    <Logo {...args} size="mediumX" />
    <Logo {...args} size="large" />
    <Logo {...args} size="largeX" />
    <Logo {...args} size="largeXX" />
    <Logo {...args} size="largeXXX" />
    <Logo {...args} size="huge" />
    <Logo {...args} size="hugeX" />
    <Logo {...args} size="hugeXX" />
    <Logo {...args} size="hugeXXX" />
    <Logo {...args} size="veryHuge" />
  </StoryContainer>
)

export const Color: Story<LogoProps> = (args) => (
  <StoryContainer>
    <Logo {...args} />
    <Logo {...args} color="primary" />
    <Logo {...args} color="secondary" />
    <Logo {...args} color="highlight" />
    <Logo {...args} color="surface" />
  </StoryContainer>
)

export const Model: Story<LogoProps> = (args) => (
  <StoryContainer>
    <Logo {...args} />
  </StoryContainer>
)
Model.args = { ...Playground.args, model: 'a' }

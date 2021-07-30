import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Logo, LogoProps } from '.'

export default {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    componentSubtitle: 'Logo adapted as brand standards for each company',
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta

export const Playground: Story<LogoProps> = (args) => <Logo {...args} />

export const Size: Story<LogoProps> = (args) => (
  <>
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
  </>
)

export const Color: Story<LogoProps> = (args) => (
  <>
    <Logo {...args} />
    <Logo {...args} color="primary" />
    <Logo {...args} color="secondary" />
    <Logo {...args} color="highlight" />
    <Logo {...args} color="surface" />
  </>
)

export const Model: Story<LogoProps> = (args) => (
  <>
    <Logo {...args} />
  </>
)
Model.args = { ...Playground.args, model: 'a' }

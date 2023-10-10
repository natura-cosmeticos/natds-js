/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import { Story, Meta } from '@storybook/react'
import TextField from '../TextField'
import { IconButton } from '../IconButton'
import { Icon } from '../Icon'
import { AppBarTop, AppBarProps } from '.'
import { Logo } from '../Logo'

const componentStatus = `
> The App Bar Top displays information and actions relating to the current screen.

## Properties
| Property                      | Values                                 |    Status           |
|---                            |                                     ---|                  ---|
| **variant(no prop)**                   | base/standard                 | ✅ Available        |
| **color**                     | default, primary, inverse, none        | ✅ Available        |
| **elevation**                 | true/false                             | ✅ Available        |
| **behaviour**                 | fixed, scroll, absolute                | ✅ Available        |
| **action**                    | left, right                            | ✅ (available but with alternative composition)        |
| **Content Position**          | (available but with alternative composition) | ✅ (available but with alternative composition)        |
| **Content Type**              | (available but with alternative composition) | ✅ (available but with alternative composition)        |
| **Content Proeminent**        | (available but with alternative composition) | ✅ (available but with alternative composition)        |


## Technical Usages Examples
`

export default {
  title: 'Components/AppBarTop',
  component: AppBarTop,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<AppBarProps> = (args) => (
  <div style={{
    display: 'flex',
    position: 'relative',
    gap: 8,
    flexDirection: 'column',
    minHeight: 920,
    width: '100%',
    // border: '1px solid red',
    overflowY: 'scroll'
  }}
  >
    <AppBarTop {...args} />

  </div>
)

Playground.args = {
  children: 'App Bar - Top',
  behaviour: 'absolute'
  // @ts-ignore
}

export const Color: Story<AppBarProps> = (args) => (
  <div style={{ display: 'flex', gap: 8, flexDirection: 'column' }}>
    <AppBarTop {...args} color="default">Default</AppBarTop>
    <AppBarTop {...args} color="primary">Primary</AppBarTop>
    <AppBarTop {...args} color="secondary">Secondary</AppBarTop>
    <AppBarTop {...args} color="inverse">Inverse</AppBarTop>
    <AppBarTop {...args} color="none">None</AppBarTop>
  </div>
)

Color.args = {
  children: 'App Bar - Top',
  // @ts-ignore
  style: { position: 'static' }
}

export const Elevation: Story<AppBarProps> = (args) => (
  <div style={{ display: 'flex', gap: 8, flexDirection: 'column' }}>
    <AppBarTop {...args}>Elevation</AppBarTop>
    <AppBarTop {...args} elevation={false}>No Elevation</AppBarTop>
  </div>
)

Elevation.args = {
  children: 'App Bar - Top',
  // @ts-ignore
  style: { position: 'static' }
}

export const WithLogo: Story<AppBarProps> = (args) => (
  <AppBarTop {...args}>
    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <IconButton IconComponent={<Icon name="outlined-navigation-menu" color="highlight" />} ariaLabel="menu" onClick={() => ''} />
      <div style={{ flexGrow: 1, justifyContent: 'center', display: 'flex' }}>
        <Logo size="hugeX" />
      </div>
      <>
        <IconButton IconComponent={<Icon name="outlined-action-search" color="highlight" />} ariaLabel="search" onClick={() => ''} />
        <IconButton IconComponent={<Icon name="outlined-finance-bag" color="highlight" />} ariaLabel="profile" onClick={() => ''} />
      </>
    </div>
  </AppBarTop>
)
WithLogo.args = {
  children: 'App Bar - Top',
  // @ts-ignore
  style: { position: 'static' }
}
export const WithSearch: Story<AppBarProps> = (args) => (
  <AppBarTop {...args}>
    <>
      <div style={{ justifyContent: 'center', display: 'flex' }}>
        <IconButton IconComponent={<Icon name="outlined-navigation-menu" color="highlight" />} ariaLabel="menu" onClick={() => ''} />
      </div>
      <div style={{ justifyContent: 'center', display: 'flex' }}>
        <TextField
          ariaLabel="search"
          onClick={() => ''}
          id="123"
          size="medium"
          placeholder="Search"
          action="icon"
          IconComponent={<IconButton IconComponent={<Icon name="outlined-action-search" color="highlight" />} ariaLabel="search" onClick={() => ''} />}
        />
      </div>
      <div>
        <IconButton IconComponent={<Icon name="outlined-action-search" color="highlight" />} ariaLabel="search" onClick={() => ''} />
        <IconButton IconComponent={<Icon name="outlined-finance-bag" color="highlight" />} ariaLabel="profile" onClick={() => ''} />
      </div>
    </>

  </AppBarTop>
)
WithSearch.args = {
  children: 'App Bar - Top',
  // @ts-ignore
  style: { position: 'static' }
}

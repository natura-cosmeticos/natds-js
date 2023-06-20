import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Chip, ChipProps } from '.'

const componentStatus = `
- - -

**NOTE FOR UXs**: This component is available in the following variants:

  - ✅ Standard

With the following attribute statuses:

  - **Attributes:**
    - ✅ Color
    - ✅ Icon
    - ✅ Avatar
    - ✅ Disabled
    - ✅ Size

- - -
`

export default {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<ChipProps> = (args) => (
  <Chip {...args} labelText="Chip label" onClick={() => console.log('clicked!')} />
)

export const WithIcon: Story<ChipProps> = (args) => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <Chip {...args} labelText="Chip label" leftIcon="outlined-default-mockup" />
    <Chip {...args} labelText="Chip label" rightIcon="outlined-default-mockup" />
    <Chip
      {...args}
      labelText="Chip label"
      leftIcon="outlined-default-mockup"
      rightIcon="outlined-default-mockup"
    />
  </div>
)

export const WithAvatar: Story<ChipProps> = (args) => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <Chip {...args} labelText="Chip label" leftAvatar="https://via.placeholder.com/200x200" />
    <Chip {...args} labelText="Chip label" rightAvatar="https://via.placeholder.com/200x200" />
    <Chip
      {...args}
      labelText="Chip label"
      leftAvatar="https://via.placeholder.com/200x200"
      rightAvatar="https://via.placeholder.com/200x200"
    />

  </div>
)

export const Disabled: Story<ChipProps> = (args) => (
  <Chip {...args} labelText="Chip label" disabled />
)

export const Selected: Story<ChipProps> = (args) => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <Chip {...args} labelText="Neutral" color="neutral" selected />
    <Chip {...args} labelText="Primary" color="primary" selected />
    <Chip {...args} labelText="Secondary" color="secondary" selected />
    <Chip
      {...args}
      labelText="Custom"
      color="custom"
      customBackground="#FF00FF"
      customBorderColor="#FF00FF"
      customLabelColor="#fff"
      selected
    />
  </div>
)

export const Custom: Story<ChipProps> = (args) => (
  <Chip {...args} labelText="Chip label" color="custom" customBackground="#FF00FF" customBorderColor="#FF00FF" />
)

export const Sizes: Story<ChipProps> = (args) => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <Chip {...args} labelText="Chip label" size="semi" />
    <Chip {...args} labelText="Chip label" size="semiX" />
    <Chip {...args} labelText="Chip label" size="medium" />
  </div>
)
export const Brand: Story<ChipProps> = (args) => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <Chip brand="avon_v2" {...args} labelText="Chip label" size="semi" />
    <Chip brand="natura_v2" {...args} labelText="Chip label" size="semiX" />
    <Chip brand="casaEestilo" color="custom" {...args} labelText="Chip label" size="medium" />
  </div>
)

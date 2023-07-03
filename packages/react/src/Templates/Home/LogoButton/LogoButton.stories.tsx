import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import LogoButton from './LogoButton'
import { LogoButtonProps } from './LogoButton.props'
import { BrandProps } from '../../GlobalTypes'

const componentStatus = `
- - -

**NOTE FOR UXs**: This is exemplo template:
- - -
`

export default {
  title: 'TeamComponents/LogoButtom',
  component: LogoButton,
  parameters: {
    componentSubtitle: 'This is an example of implementing the theme on a LogoButton page',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta

export const Playground: Story<LogoButtonProps> = (args) => {
  const [activeLogoBtn, setActiveLogoBtn] = useState<BrandProps | undefined>('natura_v2')
  const handleActive = (brands: BrandProps) => (activeLogoBtn === brands)

  return (

    <div style={{
      display: 'flex', gap: '16px', maxWidth: '600px'
    }}
    >
      <LogoButton onClick={() => setActiveLogoBtn('natura_v2')} brand="natura_v2" model="a" size="largeXX" isActive={handleActive('natura_v2')} />
      <LogoButton onClick={() => setActiveLogoBtn('avon_v2')} brand="avon_v2" model="a" size="mediumX" isActive={handleActive('avon_v2')} />
      <LogoButton onClick={() => setActiveLogoBtn('casaEestilo')} brand="casaEestilo" model="a" size="mediumX" isActive={handleActive('casaEestilo')} />
    </div>

  )
}
Playground.args = {
  isActive: false
}

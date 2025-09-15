/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
import React from 'react'
import { Story, Meta } from '@storybook/react'
import { SpotIcon, SpotIconProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `
> Um componente especializado para exibir ícones grandes da biblioteca @naturacosmeticos/natds-icons.

Este componente faz parte do Growth Plan e estende o Icon original, mas limita os tamanhos disponíveis para o range entre medium (48px) e hugeX (128px).

## Properties
| Property                      | Values                                       |    Status           |
|---                            |                                           ---|                  ---|
| **ariaHidden**                | true/false                                   | ✅ Available        |
| **ariaLabel**                 | string                                       | ✅ Available        |
| **color**                     | color-name (Support Color tokens from theme) | ✅ Available        |
| **name**                      | icon-name                                    | ✅ Available        |
| **role**                      | img, button                                  | ✅ Available        |
| **size**                      | medium, mediumX, large, largeX, largeXX, largeXXX, huge, hugeX | ✅ Available        |
| **brand**                   | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |

## Tamanhos Disponíveis
- **medium**: 48px
- **mediumX**: 56px
- **large**: 64px
- **largeX**: 72px
- **largeXX**: 80px
- **largeXXX**: 88px
- **huge**: 96px
- **hugeX**: 128px

## Technical Usages Examples
`

export default {
  title: 'Growth Plan/SpotIcon',
  component: SpotIcon,
  parameters: {
    componentSubtitle: 'Ícones com tamanhos limitados entre medium e hugeX para o Growth Plan',
    docs: { description: { component: componentStatus } }
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['medium', 'mediumX', 'large', 'largeX', 'largeXX', 'largeXXX', 'huge', 'hugeX']
      }
    },
    name: {
      control: {
        type: 'select',
        options: ['spoticon-growthplan-crystal', 'spoticon-growthplan-laurelwreath', 'spoticon-growthplan-flowertulip', 'spoticon-growthplan-graphic', 'spoticon-growthplan-trophyaward', 'spoticon-growthplan-diamondgem', 'spoticon-growthplan-trophy', 'spoticon-growthplan-trophysapphire', 'spoticon-growthplan-trophydiamond']
      }
    },
    customColor: {
      control: {
        type: 'color'
      },
      description: 'Cor personalizada que sobrepõe a cor do tema. Aceita qualquer valor CSS válido.'
    }
  }
} as Meta

export const Playground: Story<SpotIconProps> = (args) => <SpotIcon {...args} />

Playground.args = {
  name: 'outlined-default-mockup',
  size: 'medium',
  color: 'highlight'
}

export const AllSizes: Story<SpotIconProps> = () => (
  <StoryContainer>
    <div style={{
      display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap'
    }}
    >
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
      }}
      >
        <SpotIcon name="outlined-default-mockup" size="medium" />
        <span style={{ fontSize: '12px' }}>medium (48px)</span>
      </div>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
      }}
      >
        <SpotIcon name="outlined-default-mockup" size="mediumX" />
        <span style={{ fontSize: '12px' }}>mediumX (56px)</span>
      </div>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
      }}
      >
        <SpotIcon name="outlined-default-mockup" size="large" />
        <span style={{ fontSize: '12px' }}>large (64px)</span>
      </div>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
      }}
      >
        <SpotIcon name="outlined-default-mockup" size="largeX" />
        <span style={{ fontSize: '12px' }}>largeX (72px)</span>
      </div>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
      }}
      >
        <SpotIcon name="outlined-default-mockup" size="largeXX" />
        <span style={{ fontSize: '12px' }}>largeXX (80px)</span>
      </div>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
      }}
      >
        <SpotIcon name="outlined-default-mockup" size="largeXXX" />
        <span style={{ fontSize: '12px' }}>largeXXX (88px)</span>
      </div>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
      }}
      >
        <SpotIcon name="outlined-default-mockup" size="huge" />
        <span style={{ fontSize: '12px' }}>huge (96px)</span>
      </div>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
      }}
      >
        <SpotIcon name="outlined-default-mockup" size="hugeX" />
        <span style={{ fontSize: '12px' }}>hugeX (128px)</span>
      </div>
    </div>
  </StoryContainer>
)

export const CustomColors: Story<SpotIconProps> = () => (
  <StoryContainer>
    <div style={{
      display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap'
    }}
    >
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
      }}
      >
        <SpotIcon name="spoticon-growthplan-crystal" size="huge" customColor="#FF5733" />
        <span style={{ fontSize: '12px' }}>Hex: #FF5733</span>
      </div>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
      }}
      >
        <SpotIcon name="spoticon-growthplan-laurelwreath" size="huge" customColor="rgb(156, 39, 176)" />
        <span style={{ fontSize: '12px' }}>RGB: rgb(156, 39, 176)</span>
      </div>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
      }}
      >
        <SpotIcon name="spoticon-growthplan-flowertulip" size="huge" customColor="rgba(33, 150, 243, 0.8)" />
        <span style={{ fontSize: '12px' }}>RGBA: rgba(33, 150, 243, 0.8)</span>
      </div>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
      }}
      >
        <SpotIcon name="spoticon-growthplan-trophyaward" size="huge" customColor="gold" />
        <span style={{ fontSize: '12px' }}>Named: gold</span>
      </div>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
      }}
      >
        <SpotIcon name="spoticon-growthplan-diamondgem" size="huge" customColor="hsl(200, 100%, 50%)" />
        <span style={{ fontSize: '12px' }}>HSL: hsl(200, 100%, 50%)</span>
      </div>
    </div>
  </StoryContainer>
)

export const ComparisonThemeVsCustom: Story<SpotIconProps> = () => (
  <StoryContainer>
    <div style={{
      display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap'
    }}
    >
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px'
      }}
      >
        <h4 style={{ margin: 0, color: '#333' }}>Cores do Tema</h4>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap'
        }}
        >
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
          }}
          >
            <SpotIcon name="spoticon-growthplan-trophy" size="large" color="primary" />
            <span style={{ fontSize: '12px' }}>primary</span>
          </div>
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
          }}
          >
            <SpotIcon name="spoticon-growthplan-trophy" size="large" color="secondary" />
            <span style={{ fontSize: '12px' }}>secondary</span>
          </div>
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
          }}
          >
            <SpotIcon name="spoticon-growthplan-trophy" size="large" color="highlight" />
            <span style={{ fontSize: '12px' }}>highlight</span>
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px'
      }}
      >
        <h4 style={{ margin: 0, color: '#333' }}>Cores Personalizadas</h4>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap'
        }}
        >
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
          }}
          >
            <SpotIcon name="spoticon-growthplan-trophy" size="large" customColor="#E91E63" />
            <span style={{ fontSize: '12px' }}>#E91E63</span>
          </div>
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
          }}
          >
            <SpotIcon name="spoticon-growthplan-trophy" size="large" customColor="#4CAF50" />
            <span style={{ fontSize: '12px' }}>#4CAF50</span>
          </div>
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
          }}
          >
            <SpotIcon name="spoticon-growthplan-trophy" size="large" customColor="#FF9800" />
            <span style={{ fontSize: '12px' }}>#FF9800</span>
          </div>
        </div>
      </div>
    </div>
  </StoryContainer>
)

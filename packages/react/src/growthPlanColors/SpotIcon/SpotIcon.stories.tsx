/* eslint-disable max-lines */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { SpotIcon, SpotIconProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'
import { GrowthPlanProviderColors } from '../Provider'
import { growthPlanColors, GrowthPlanColorsType } from '../growthPlanColors'

// Estilo base com fonte Roboto para consistência
const baseTextStyle = {
  fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif'
}

// Função para formatar nomes dos temas
const formatThemeName = (key: string): string => {
  const nameMap: Record<string, string> = {
    crystal: 'Crystal',
    bronze: 'Bronze',
    silver: 'Silver',
    gold: 'Gold',
    sapphire: 'Sapphire',
    diamond: 'Diamond',
    diamondPlus: 'Diamond Plus'
  }

  return nameMap[key] || key.charAt(0).toUpperCase() + key.slice(1)
}

// Função para resolver cor de background baseada na cor do ícone
const getBackgroundColor = (
  iconColor: string | undefined,
  themeColors: any
): string => {
  if (!iconColor || !themeColors) {
    return '#ffffff'
  }

  const colorMap: Record<string, string> = {
    primary: 'onPrimary',
    primaryLight: 'onPrimaryLight',
    primaryLightest: 'onPrimaryLightest',
    primaryDark: 'onPrimaryDark',
    primaryDarkest: 'onPrimaryDarkest',
    onPrimary: 'primary',
    onPrimaryLight: 'primaryLight',
    onPrimaryLightest: 'primaryLightest',
    onPrimaryDark: 'primaryDark',
    onPrimaryDarkest: 'primaryDarkest'
  }

  const onColorKey = colorMap[iconColor]
  return onColorKey && themeColors[onColorKey] ? themeColors[onColorKey] : '#ffffff'
}

// Função para resolver cor do texto baseada no background
const getTextColor = (backgroundColor: string): string => {
  // Se for background escuro (#111111), usar texto mais claro
  if (backgroundColor === '#111111') {
    return '#999'
  }
  // Para outros backgrounds, usar cor padrão
  return '#666'
}

// Componente ThemeSelector para o Playground interativo
interface ThemeSelectorProps {
  selectedTheme: keyof GrowthPlanColorsType
  onThemeChange: (theme: keyof GrowthPlanColorsType) => void
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ selectedTheme, onThemeChange }) => {
  // Gerar themes dinamicamente baseado no growthPlanColors
  const themes = Object.entries(growthPlanColors.color).map(([key, colorScheme]) => ({
    key: key as keyof GrowthPlanColorsType,
    name: formatThemeName(key),
    color: colorScheme.primary
  }))

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: '8px',
      marginBottom: '16px'
    }}
    >
      {themes.map((theme) => (
        <button
          key={theme.key}
          type="button"
          onClick={() => onThemeChange(theme.key)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 12px',
            border: selectedTheme === theme.key ? '2px solid #333' : '1px solid #ccc',
            borderRadius: '8px',
            background: selectedTheme === theme.key ? '#f8f9fa' : 'white',
            cursor: 'pointer',
            fontSize: '13px',
            fontWeight: selectedTheme === theme.key ? '600' : '400',
            ...baseTextStyle,
            transition: 'all 0.2s ease',
            boxShadow: selectedTheme === theme.key ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
          }}
        >
          <div style={{
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            background: theme.color,
            border: '2px solid white',
            boxShadow: '0 0 0 1px rgba(0,0,0,0.1)',
            flexShrink: 0
          }}
          />
          <span>{theme.name}</span>
        </button>
      ))}
    </div>
  )
}

const componentStatus = `
> Um componente especializado para exibir ícones grandes da biblioteca @naturacosmeticos/natds-icons.

Este componente faz parte do Growth Plan e estende o Icon original, mas limita os tamanhos disponíveis para o range entre medium (48px) e hugeX (128px).

**As cores são gerenciadas exclusivamente através do GrowthPlanProviderColors via CSS override!**

## Properties
| Property                      | Values                                       |    Status           |
|---                            |                                           ---|                  ---|
| **ariaHidden**                | true/false                                   | ✅ Available        |
| **ariaLabel**                 | string                                       | ✅ Available        |
| **color**                     | primary, onPrimary, primaryLight, etc. (requer Provider) | ✅ Available        |
| **name**                      | icon-name                                    | ✅ Available        |
| **role**                      | img, button                                  | ✅ Available        |
| **size**                      | medium, mediumX, large, largeX, largeXX, largeXXX, huge, hugeX | ✅ Available        |
| **brand**                   | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |

## Uso Obrigatório com GrowthPlanProviderColors
\`\`\`tsx
const { bronze, crystal } = growthPlanColors.color;

<GrowthPlanProviderColors theme={bronze}>
  <SpotIcon color="primary" name="spoticon-growthplan-crystal" />
  <SpotIcon color="primaryLight" name="spoticon-growthplan-trophy" />
</GrowthPlanProviderColors>
\`\`\`

## Cores Semânticas Disponíveis
- **primary** / **onPrimary**
- **primaryLight** / **onPrimaryLight** 
- **primaryLightest** / **onPrimaryLightest**
- **primaryDark** / **onPrimaryDark**
- **primaryDarkest** / **onPrimaryDarkest**

## Tamanhos Disponíveis
- **medium**: 48px - **mediumX**: 56px - **large**: 64px - **largeX**: 72px
- **largeXX**: 80px - **largeXXX**: 88px - **huge**: 96px - **hugeX**: 128px

## Como Funciona Internamente
As cores do Growth Plan são aplicadas via **CSS override** com alta especificidade, sobrescrevendo as cores padrão do componente Icon base. Isso garante que as cores hexadecimais do Growth Plan (#75B7F0, #DE713B, etc.) sejam renderizadas corretamente.

## ✨ Playground Interativo
Use o **Playground** para testar todos os temas do Growth Plan em tempo real! Selecione diferentes temas e veja como as cores mudam instantaneamente.

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
    color: {
      control: {
        type: 'select',
        options: ['primary', 'onPrimary', 'primaryLight', 'onPrimaryLight', 'primaryLightest', 'onPrimaryLightest', 'primaryDark', 'onPrimaryDark', 'primaryDarkest', 'onPrimaryDarkest']
      },
      description: 'Cores semânticas disponíveis quando usado com GrowthPlanProviderColors'
    }
  }
} as Meta

export const Playground: Story<SpotIconProps> = (args) => {
  const [selectedTheme, setSelectedTheme] = useState<keyof GrowthPlanColorsType>('bronze')
  const selectedThemeData = growthPlanColors.color[selectedTheme]
  const { color, size, name } = args

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      padding: '16px',
      background: '#fafafa',
      borderRadius: '8px'
    }}
    >
      {/* Seletor de Temas */}
      <div>
        <h4 style={{
          margin: '0 0 12px 0',
          color: '#333',
          fontSize: '16px',
          fontWeight: '600',
          ...baseTextStyle
        }}
        >
          🎨 Selecione o Tema do Growth Plan:
        </h4>
        <ThemeSelector selectedTheme={selectedTheme} onThemeChange={setSelectedTheme} />
      </div>

      {/* Informações do Tema */}
      <div style={{
        padding: '16px',
        background: 'white',
        borderRadius: '8px',
        border: '1px solid #e1e5e9',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '8px'
        }}
        >
          <div style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: selectedThemeData.primary,
            border: '3px solid white',
            boxShadow: '0 0 0 1px rgba(0,0,0,0.1)'
          }}
          />
          <strong style={{
            fontSize: '14px',
            color: '#333',
            ...baseTextStyle
          }}
          >
            Tema Ativo:
            {' '}
            {selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)}
          </strong>
        </div>
        <div style={{
          fontSize: '12px',
          color: '#666',
          display: 'flex',
          gap: '16px',
          ...baseTextStyle
        }}
        >
          <span>
            <strong>Primary:</strong>
            {' '}
            {selectedThemeData.primary}
          </span>
          <span>
            <strong>Primary Light:</strong>
            {' '}
            {selectedThemeData.primaryLight}
          </span>
          <span>
            <strong>Primary Dark:</strong>
            {' '}
            {selectedThemeData.primaryDark}
          </span>
        </div>
      </div>

      {/* SpotIcon com Provider */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '32px',
        background: getBackgroundColor(color, selectedThemeData),
        border: `2px dashed ${color ? '#999' : '#ccc'}`,
        borderRadius: '12px',
        gap: '16px',
        transition: 'all 0.3s ease'
      }}
      >
        <div style={{
          fontSize: '12px',
          color: getTextColor(getBackgroundColor(color, selectedThemeData)),
          textAlign: 'center',
          marginBottom: '8px',
          ...baseTextStyle
        }}
        >
          SpotIcon renderizado com
          {' '}
          <strong>
            {selectedTheme}
          </strong>
          {' '}
          theme
          {color && (
            <>
              <br />
              <small style={{ fontSize: '10px', opacity: 0.8 }}>
                🎨 Background dinâmico:
                {' '}
                {color}
                {' '}
                → on
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </small>
            </>
          )}
        </div>
        <GrowthPlanProviderColors theme={selectedThemeData}>
          <SpotIcon {...args} />
        </GrowthPlanProviderColors>
        <div style={{
          fontSize: '11px',
          color: getTextColor(getBackgroundColor(color, selectedThemeData)),
          textAlign: 'center',
          ...baseTextStyle
        }}
        >
          Args: color=
          {color || 'undefined'}
          {' '}
          size=
          {size}
          {' '}
          name=
          {name}
          {color && (
            <>
              <br />
              <span style={{ fontSize: '10px' }}>
                Background:
                {' '}
                {getBackgroundColor(color, selectedThemeData)}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

Playground.args = {
  name: 'spoticon-growthplan-graphic',
  size: 'medium',
  color: 'primary'
}

export const ThemeComparison: Story<SpotIconProps> = () => {
  const {
    bronze, crystal, diamond, gold, sapphire, diamondPlus
  } = growthPlanColors.color

  return (
    <StoryContainer>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
        <div>
          <h4 style={baseTextStyle}>Bronze</h4>
          <GrowthPlanProviderColors theme={bronze}>
            <SpotIcon name="spoticon-growthplan-trophy" size="huge" color="primary" />
          </GrowthPlanProviderColors>
        </div>
        <div>
          <h4 style={baseTextStyle}>Crystal</h4>
          <GrowthPlanProviderColors theme={crystal}>
            <SpotIcon name="spoticon-growthplan-crystal" size="huge" color="primary" />
          </GrowthPlanProviderColors>
        </div>
        <div>
          <h4 style={baseTextStyle}>Diamond</h4>
          <GrowthPlanProviderColors theme={diamond}>
            <SpotIcon name="spoticon-growthplan-diamondgem" size="huge" color="primary" />
          </GrowthPlanProviderColors>
        </div>
        <div>
          <h4 style={baseTextStyle}>Gold</h4>
          <GrowthPlanProviderColors theme={gold}>
            <SpotIcon name="spoticon-growthplan-diamondgem" size="huge" color="primary" />
          </GrowthPlanProviderColors>
        </div>
        <div>
          <h4 style={baseTextStyle}>Sapphire</h4>
          <GrowthPlanProviderColors theme={sapphire}>
            <SpotIcon name="spoticon-growthplan-trophysapphire" size="huge" color="primary" />
          </GrowthPlanProviderColors>
        </div>
        <div>
          <h4 style={baseTextStyle}>Diamond Plus</h4>
          <GrowthPlanProviderColors theme={diamondPlus}>
            <SpotIcon name="spoticon-growthplan-trophydiamond" size="huge" color="primary" />
          </GrowthPlanProviderColors>
        </div>
      </div>
    </StoryContainer>
  )
}

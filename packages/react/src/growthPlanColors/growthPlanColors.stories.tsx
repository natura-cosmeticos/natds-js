/* eslint-disable max-len */

import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react'
import { legacyGrowthPlanColors } from './legacyGrowthPlanColors'
import { growthPlanColors } from './growthPlanColors'
import { GayaButton } from '../components/GayaButton'

const componentStatus = `
> ⚠️ **Observação:** Essas cores não são recomendadas para componentes core.

> Cores do Plano de Crescimento.

Este componente exibe os grupos de cores do Growth Plan de forma visual.

Cada grupo (como crystal, bronze, silver, etc) é apresentado com suas variações de cor.

🔧 **Modo de uso**:
Importe o objeto de cores diretamente da biblioteca \`@naturacosmeticos/natds-react\`:

\`\`\`
import { legacyGrowthPlanColors } from '@naturacosmeticos/natds-react';
\`\`\`

🎨 **Exemplo de uso **:

const { crystal, bronze, silver } = legacyGrowthPlanColors.color;

---

## 🆕 **Nova Estrutura Semântica Disponível**

Agora também está disponível uma nova estrutura de cores com nomenclatura semântica melhorada!

🔧 **Como importar a nova estrutura**:
\`\`\`
import { growthPlanColors } from '@naturacosmeticos/natds-react';
\`\`\`

✨ **Principal Vantagem - Facilita Troca de Temas**:

A estrutura semântica mantém os **mesmos tokens** em todos os temas, facilitando mudanças dinâmicas:

\`\`\`typescript
// ✅ COM ESTRUTURA SEMÂNTICA - Tokens consistentes
const createButton = (theme: 'bronze' | 'silver' | 'gold') => ({
  backgroundColor: growthPlanColors[theme].main,
  color: growthPlanColors[theme].onMain,
  
  '&:hover': {
    backgroundColor: growthPlanColors[theme].mainDark,
    color: growthPlanColors[theme].onMainDark
  }
})

// Mudança de tema é simples - apenas troca o escopo:
createButton('bronze')  // Tema bronze
createButton('silver')  // Tema silver - MESMOS TOKENS!
createButton('gold')    // Tema gold - MESMOS TOKENS!
\`\`\`

\`\`\`typescript
// ❌ COM ESTRUTURA Legacy - Tokens diferentes para cada tema
const createButtonOld = (theme: 'bronze' | 'silver' | 'gold') => {
  // Precisa mapear tokens diferentes para cada tema
  const tokenMap = {
    bronze: { main: 'bronze', onMain: 'onBronze', dark: 'bronzeDark' },
    silver: { main: 'silver', onMain: 'onSilver', dark: 'silverDark' },
    gold: { main: 'gold', onMain: 'onGold', dark: 'goldDark' }
  }
  
  return {
backgroundColor: legacyGrowthPlanColors.color[theme][tokenMap[theme].main],
        color: legacyGrowthPlanColors.color[theme][tokenMap[theme].onMain]
    // Muito mais complexo para manter!
  }
}
\`\`\`

🚀 **Outras Vantagens**:
- Facilita reutilização e manutenção
- Segue padrões da indústria (Material Design, etc.)
- **Componentes reutilizáveis** entre diferentes temas Growth Plan

💡 **Recomendação**: Para novos projetos, considere usar \`growthPlanColors\` para uma melhor experiência de desenvolvimento e facilidade na troca de temas.

---

Utilize esta visualização para verificar as cores disponíveis, seus nomes, valores hexadecimais e uma prévia visual de cada uma.


`

export default {
  title: 'Growth Plan/Colors',
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

const boxStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '1rem',
  width: '120px',
  fontFamily: 'sans-serif',
  padding: '1rem'
}

const colorBoxStyle = (color: string): React.CSSProperties => ({
  width: '100%',
  height: '50px',
  backgroundColor: color,
  borderRadius: '4px',
  marginTop: '0.5rem',
  border: '1px solid #ccc'
})

const ColorBlock = ({ name, value }: { name: string; value: string }) => (
  <div style={boxStyle}>
    <strong>{name}</strong>
    <div style={{ fontSize: '0.8rem', color: '#666' }}>{value}</div>
    <div style={colorBoxStyle(value)} />
  </div>
)

const CategoryBlock = ({ categoryName, colors }: { categoryName: string; colors: Record<string, string> }) => (
  <div style={{ marginBottom: '2rem' }}>
    <h2 style={{ fontFamily: 'sans-serif' }}>{categoryName.toUpperCase()}</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.entries(colors).map(([key, value]) => (
        <ColorBlock key={key} name={key} value={value} />
      ))}
    </div>
  </div>
)

const ColorToggleButtons = ({ isLegacy, setIsLegacy }: { isLegacy: boolean; setIsLegacy: (value: boolean) => void }) => (
  <div
    style={{
      marginBottom: '1rem',
      display: 'flex',
      gap: '1rem',
      padding: '1rem'
    }}
  >
    <GayaButton
      onClick={() => setIsLegacy(false)}
      color={!isLegacy ? 'primary' : 'neutral'}
      variant={!isLegacy ? 'contained' : 'outlined'}
    >
      Estrutura Atual (Semântica)
    </GayaButton>
    <GayaButton
      onClick={() => setIsLegacy(true)}
      color={isLegacy ? 'primary' : 'neutral'}
      variant={isLegacy ? 'contained' : 'outlined'}
    >
      Estrutura Legacy
    </GayaButton>
  </div>
)

export const AllColors: Story = () => {
  const [isLegacy, setIsLegacy] = useState(false)
  const colorGroupsLegacy = legacyGrowthPlanColors.color
  const colorGroupsCurrent = growthPlanColors

  const currentColorGroups = isLegacy ? colorGroupsLegacy : colorGroupsCurrent

  return (
    <>
      <ColorToggleButtons isLegacy={isLegacy} setIsLegacy={setIsLegacy} />
      <div style={{ padding: '0 2rem 2rem' }}>
        <h3 style={{ fontFamily: 'sans-serif', color: '#333', marginBottom: '1rem' }}>
          {isLegacy ? 'Growth Plan Colors - Estrutura Legacy' : 'Growth Plan Colors - Estrutura Semântica'}
        </h3>
        {Object.entries(currentColorGroups).map(([categoryName, colors]) => (
          <CategoryBlock key={categoryName} categoryName={categoryName} colors={colors} />
        ))}
      </div>
    </>
  )
}

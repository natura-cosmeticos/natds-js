# GrowthPlanProviderColors

O `GrowthPlanProviderColors` é um React Context Provider que permite que componentes filhos acessem cores de um tema específico do Growth Plan de forma semântica.

## Características

- ✅ **Uso semântico**: Use `primary`, `primaryLight`, etc. ao invés de valores hexadecimais
- ✅ **Consistência de tema**: Garante que todos os componentes filhos usem o mesmo tema
- ✅ **TypeScript**: Totalmente tipado para melhor DX
- ✅ **Compatibilidade**: Componentes funcionam com ou sem o Provider

## Uso Básico

```tsx
import { 
  GrowthPlanProviderColors, 
  growthPlanColors,
  SpotIcon 
} from '@naturacosmeticos/natds-react/growthPlanColors';

// Selecionar tema desejado
const { bronze, crystal, diamond } = growthPlanColors.color;

function App() {
  return (
    <GrowthPlanProviderColors theme={bronze}>
      <SpotIcon color="primary" name="spoticon-growthplan-crystal" />
      <SpotIcon color="primaryLight" name="spoticon-growthplan-trophy" />
      <SpotIcon color="primaryDark" name="spoticon-growthplan-diamondgem" />
    </GrowthPlanProviderColors>
  );
}
```

## Hook useGrowthPlanColors

Use o hook para acessar as cores do tema em qualquer componente filho:

```tsx
import { useGrowthPlanColors } from '@naturacosmeticos/natds-react/growthPlanColors';

function CustomComponent() {
  const { colors } = useGrowthPlanColors();
  
  return (
    <div 
      style={{ 
        background: colors.primary, 
        color: colors.onPrimary,
        padding: '16px',
        borderRadius: '8px'
      }}
    >
      <h2 style={{ color: colors.primaryDark }}>
        Título com cor do tema
      </h2>
      <p>Conteúdo com cores consistentes</p>
    </div>
  );
}

// Uso
<GrowthPlanProviderColors theme={diamond}>
  <CustomComponent />
</GrowthPlanProviderColors>
```

## Temas Disponíveis

Todos os temas do Growth Plan estão disponíveis:

```tsx
const {
  crystal,      // Azul claro
  bronze,       // Laranja/Bronze  
  silver,       // Cinza/Prata
  gold,         // Dourado
  sapphire,     // Azul escuro
  diamond,      // Roxo
  diamondPlus   // Azul marinho
} = growthPlanColors.color;
```

## Cores Semânticas

Cada tema possui as seguintes cores semânticas:

- `primary` - Cor principal do tema
- `onPrimary` - Cor do texto sobre a cor principal
- `primaryLight` - Versão clara da cor principal
- `onPrimaryLight` - Cor do texto sobre a versão clara
- `primaryLightest` - Versão mais clara da cor principal
- `onPrimaryLightest` - Cor do texto sobre a versão mais clara
- `primaryDark` - Versão escura da cor principal
- `onPrimaryDark` - Cor do texto sobre a versão escura  
- `primaryDarkest` - Versão mais escura da cor principal
- `onPrimaryDarkest` - Cor do texto sobre a versão mais escura

## Exemplo Completo

```tsx
import React from 'react';
import { 
  GrowthPlanProviderColors, 
  useGrowthPlanColors,
  growthPlanColors,
  SpotIcon 
} from '@naturacosmeticos/natds-react/growthPlanColors';

const Card = () => {
  const { colors } = useGrowthPlanColors();
  
  return (
    <div style={{
      background: colors.primaryLightest,
      border: `2px solid ${colors.primary}`,
      borderRadius: '12px',
      padding: '24px',
      margin: '16px'
    }}>
      <div style={{
        background: colors.primary,
        color: colors.onPrimary,
        padding: '12px',
        borderRadius: '8px',
        marginBottom: '16px'
      }}>
        <SpotIcon 
          color="onPrimary" 
          name="spoticon-growthplan-trophy" 
          size="large" 
        />
        <h3 style={{ margin: '0 0 0 12px', display: 'inline-block' }}>
          Plano Gold
        </h3>
      </div>
      
      <p style={{ color: colors.primaryDark, margin: 0 }}>
        Conteúdo do card com cores consistentes do tema
      </p>
    </div>
  );
};

function App() {
  const { gold, diamond } = growthPlanColors.color;
  
  return (
    <div>
      <GrowthPlanProviderColors theme={gold}>
        <Card />
      </GrowthPlanProviderColors>
      
      <GrowthPlanProviderColors theme={diamond}>
        <Card />
      </GrowthPlanProviderColors>
    </div>
  );
}
```

## Vantagens

1. **Manutenibilidade**: Mudanças de tema são centralizadas
2. **Consistência**: Garante uso correto das cores
3. **Flexibilidade**: Permite mudança de tema em runtime
4. **Developer Experience**: TypeScript sugere cores disponíveis
5. **Performance**: Evita prop drilling desnecessário
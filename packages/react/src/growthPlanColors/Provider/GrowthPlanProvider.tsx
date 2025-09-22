import React, { createContext } from 'react'
import { GrowthPlanProviderProps, GrowthPlanContextType } from './GrowthPlanProvider.props'
import { growthPlanColors } from '../growthPlanColors'

/**
 * Contexto para compartilhar cores do Growth Plan entre componentes
 */
export const GrowthPlanContext = createContext<GrowthPlanContextType | null>(null)

/**
 * Provider do Growth Plan
 *
 * Este componente fornece um contexto com as cores de um nível específico
 * (bronze, crystal, silver, etc.) para todos os componentes filhos.
 *
 * @param props - Propriedades do provider
 * @returns Elemento JSX com o contexto de cores
 *
 * @example
 * ```tsx
 * function App() {
 *   return (
 *     <GrowthPlanProvider level="bronze">
 *       <SpotIcon color="main" name="spoticon-growthplan-crystal" />
 *       <SpotIcon color="mainLight" name="spoticon-growthplan-trophy" />
 *     </GrowthPlanProvider>
 *   );
 * }
 * ```
 */
export const GrowthPlanProvider: React.FC<GrowthPlanProviderProps> = ({
  level,
  children
}) => {
  const theme = growthPlanColors.color[level]

  const contextValue: GrowthPlanContextType = {
    colors: theme
  }

  return (
    <GrowthPlanContext.Provider value={contextValue}>
      {children}
    </GrowthPlanContext.Provider>
  )
}

GrowthPlanProvider.displayName = 'GrowthPlanProvider'

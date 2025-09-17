import React, { createContext } from 'react';
import { GrowthPlanProviderColorsProps, GrowthPlanColorsContextType } from './GrowthPlanProviderColors.props';

/**
 * Contexto para compartilhar cores do Growth Plan entre componentes
 */
export const GrowthPlanColorsContext = createContext<GrowthPlanColorsContextType | null>(null);

/**
 * Provider de cores do Growth Plan
 * 
 * Este componente fornece um contexto com as cores de um tema específico
 * (bronze, crystal, silver, etc.) para todos os componentes filhos.
 * 
 * @param props - Propriedades do provider
 * @returns Elemento JSX com o contexto de cores
 * 
 * @example
 * ```tsx
 * import { growthPlanColors } from '../growthPlanColors';
 * 
 * const { bronze, crystal } = growthPlanColors.color;
 * 
 * function App() {
 *   return (
 *     <GrowthPlanProviderColors theme={bronze}>
 *       <SpotIcon color="primary" name="spoticon-growthplan-crystal" />
 *       <SpotIcon color="primaryLight" name="spoticon-growthplan-trophy" />
 *     </GrowthPlanProviderColors>
 *   );
 * }
 * ```
 */
export const GrowthPlanProviderColors: React.FC<GrowthPlanProviderColorsProps> = ({
  theme,
  children
}) => {
  const contextValue: GrowthPlanColorsContextType = {
    colors: theme
  };

  return (
    <GrowthPlanColorsContext.Provider value={contextValue}>
      {children}
    </GrowthPlanColorsContext.Provider>
  );
};

GrowthPlanProviderColors.displayName = 'GrowthPlanProviderColors';
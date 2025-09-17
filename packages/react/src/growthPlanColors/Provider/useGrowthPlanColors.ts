import { useContext } from 'react'
import { GrowthPlanColorsContext } from './GrowthPlanProviderColors'
import { GrowthPlanColorsContextType } from './GrowthPlanProviderColors.props'

/**
 * Hook para acessar as cores do Growth Plan a partir do contexto
 *
 * @returns O contexto com as cores do tema atual
 * @throws Error se usado fora do GrowthPlanProviderColors
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { colors } = useGrowthPlanColors();
 *
 *   return (
 *     <div style={{ background: colors.main, color: colors.onMain }}>
 *       Conteúdo com cores do tema
 *     </div>
 *   );
 * }
 * ```
 */
export const useGrowthPlanColors = (): GrowthPlanColorsContextType => {
  const context = useContext(GrowthPlanColorsContext)

  if (!context) {
    throw new Error(
      'useGrowthPlanColors deve ser usado dentro de um GrowthPlanProviderColors. '
      + 'Certifique-se de envolver seu componente com <GrowthPlanProviderColors theme={tema}>'
    )
  }

  return context
}

export default useGrowthPlanColors

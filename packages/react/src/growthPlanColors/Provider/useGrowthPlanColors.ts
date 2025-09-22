import { useContext } from 'react'
import { GrowthPlanContext } from './GrowthPlanProvider'
import { GrowthPlanContextType } from './GrowthPlanProvider.props'

/**
 * Hook para acessar as cores do Growth Plan a partir do contexto
 *
 * @returns O contexto com as cores do tema atual
 * @throws Error se usado fora do GrowthPlanProvider
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
export const useGrowthPlanColors = (): GrowthPlanContextType => {
  const context = useContext(GrowthPlanContext)

  if (!context) {
    throw new Error(
      'useGrowthPlanColors deve ser usado dentro de um GrowthPlanProvider. '
      + 'Certifique-se de envolver seu componente com <GrowthPlanProvider level="bronze">'
    )
  }

  return context
}

export default useGrowthPlanColors

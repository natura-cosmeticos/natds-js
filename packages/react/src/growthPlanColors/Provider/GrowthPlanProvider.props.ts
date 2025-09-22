import { ReactNode } from 'react'
import { ColorScheme } from '../growthPlanColors'

/**
 * Níveis disponíveis do Growth Plan
 */
export type GrowthPlanLevel = 'crystal' | 'bronze' | 'silver' | 'gold' | 'sapphire' | 'diamond' | 'diamondPlus'

/**
 * Props do GrowthPlanProvider
 */
export interface GrowthPlanProviderProps {
  /**
   * O nível do Growth Plan (bronze, crystal, etc.)
   */
  level: GrowthPlanLevel;

  /**
   * Componentes filhos que terão acesso ao contexto de cores
   */
  children: ReactNode;
}

/**
 * Contexto que será fornecido pelo Provider
 */
export interface GrowthPlanContextType {
  /**
   * Esquema de cores atual disponível para os componentes
   */
  colors: ColorScheme;
}

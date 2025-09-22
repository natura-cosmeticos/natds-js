import { ReactNode } from 'react'
import { GrowthPlanColor, GrowthPlanLevel } from '../growthPlanColors'

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
  colors: GrowthPlanColor;
}

import { ReactNode } from 'react'
import { ColorScheme } from '../growthPlanColors'

/**
 * Props do GrowthPlanProviderColors
 */
export interface GrowthPlanProviderColorsProps {
  /**
   * O tema de cores a ser usado pelos componentes filhos
   */
  theme: ColorScheme;

  /**
   * Componentes filhos que terão acesso ao contexto de cores
   */
  children: ReactNode;
}

/**
 * Contexto que será fornecido pelo Provider
 */
export interface GrowthPlanColorsContextType {
  /**
   * Esquema de cores atual disponível para os componentes
   */
  colors: ColorScheme;
}

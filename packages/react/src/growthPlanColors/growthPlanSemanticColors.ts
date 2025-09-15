/**
 * Growth Plan Semantic Colors - Nova estrutura semântica para cores do plano de crescimento
 *
 * Esta estrutura utiliza nomenclatura semântica (primary, secondary, etc.) ao invés de
 * repetir o nome da categoria, facilitando o uso e reutilização.
 */

export interface SemanticColorScheme {
  primary: string;
  onPrimary: string;
  primaryLight: string;
  onPrimaryLight: string;
  primaryLightest: string;
  onPrimaryLightest: string;
  primaryDark: string;
  onPrimaryDark: string;
  primaryDarkest: string;
  onPrimaryDarkest: string;
}

export interface GrowthPlanSemanticColorsType {
  crystal: SemanticColorScheme;
  bronze: SemanticColorScheme;
  silver: SemanticColorScheme;
  gold: SemanticColorScheme;
  sapphire: SemanticColorScheme;
  diamond: SemanticColorScheme;
  diamondPlus: SemanticColorScheme;
}

export interface GrowthPlanSemanticType {
  color: GrowthPlanSemanticColorsType;
}

export const growthPlanSemanticColors: GrowthPlanSemanticType = {
  color: {
    crystal: {
      primary: '#75B7F0',
      onPrimary: '#111111',
      primaryLight: '#BADBF7',
      onPrimaryLight: '#111111',
      primaryLightest: '#D1E7FA',
      onPrimaryLightest: '#111111',
      primaryDark: '#0F518A',
      onPrimaryDark: '#FFFFFF',
      primaryDarkest: '#093053',
      onPrimaryDarkest: '#FFFFFF'
    },
    bronze: {
      primary: '#DE713B',
      onPrimary: '#111111',
      primaryLight: '#F7C6BA',
      onPrimaryLight: '#111111',
      primaryLightest: '#FBE1DA',
      onPrimaryLightest: '#111111',
      primaryDark: '#7B3715',
      onPrimaryDark: '#FFFFFF',
      primaryDarkest: '#441E0C',
      onPrimaryDarkest: '#FFFFFF'
    },
    silver: {
      primary: '#859DB7',
      onPrimary: '#111111',
      primaryLight: '#BFCCD9',
      onPrimaryLight: '#111111',
      primaryLightest: '#E1E7ED',
      onPrimaryLightest: '#111111',
      primaryDark: '#35475A',
      onPrimaryDark: '#FFFFFF',
      primaryDarkest: '#1E2632',
      onPrimaryDarkest: '#FFFFFF'
    },
    gold: {
      primary: '#DA9E2F',
      onPrimary: '#111111',
      primaryLight: '#EED3A0',
      onPrimaryLight: '#111111',
      primaryLightest: '#F8ECD6',
      onPrimaryLightest: '#111111',
      primaryDark: '#7A5716',
      onPrimaryDark: '#FFFFFF',
      primaryDarkest: '#44300C',
      onPrimaryDarkest: '#FFFFFF'
    },
    sapphire: {
      primary: '#317FE8',
      onPrimary: '#111111',
      primaryLight: '#A3C6F5',
      onPrimaryLight: '#111111',
      primaryLightest: '#D1E3FA',
      onPrimaryLightest: '#111111',
      primaryDark: '#0F3F80',
      onPrimaryDark: '#FFFFFF',
      primaryDarkest: '#092449',
      onPrimaryDarkest: '#FFFFFF'
    },
    diamond: {
      primary: '#A26CE0',
      onPrimary: '#111111',
      primaryLight: '#CAABED',
      onPrimaryLight: '#111111',
      primaryLightest: '#E6D7F7',
      onPrimaryLightest: '#111111',
      primaryDark: '#451977',
      onPrimaryDark: '#FFFFFF',
      primaryDarkest: '#260E42',
      onPrimaryDarkest: '#FFFFFF'
    },
    diamondPlus: {
      primary: '#3C4F77',
      onPrimary: '#FFFFFF',
      primaryLight: '#BBC6DD',
      onPrimaryLight: '#FFFFFF',
      primaryLightest: '#DDE3EE',
      onPrimaryLightest: '#FFFFFF',
      primaryDark: '#293651',
      onPrimaryDark: '#FFFFFF',
      primaryDarkest: '#1B2436',
      onPrimaryDarkest: '#FFFFFF'
    }
  }
}

/**
 * Exemplos de uso:
 *
 * // Uso semântico intuitivo
 * background: theme.color.bronze.primary
 * color: theme.color.bronze.onPrimary
 *
 * // Para variações
 * background: theme.color.gold.primaryLight
 * color: theme.color.gold.onPrimaryLight
 *
 * // Para temas escuros
 * background: theme.color.diamond.primaryDark
 * color: theme.color.diamond.onPrimaryDark
 */

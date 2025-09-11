export type CrystalColorsTypes = {
    crystal: string;
    onCrystal: string;
    crystalLight: string;
    onCrystalLight: string;
    crystalLightest: string;
    onCrystalLightest: string;
    crystalDark: string;
    onCrystalDark: string;
    crystalDarkest: string;
    onCrystalDarkest: string;
  };

export type BronzeColorsTypes = {
    bronze: string;
    onBronze: string;
    bronzeLight: string;
    onBronzeLight: string;
    bronzeLightest: string;
    onBronzeLightest: string;
    bronzeDark: string;
    onBronzeDark: string;
    bronzeDarkest: string;
    onBronzeDarkest: string;
  };

export type SilverColorsTypes = {
    silver: string;
    onSilver: string;
    silverLight: string;
    onSilverLight: string;
    silverLightest: string;
    onSilverLightest: string;
    silverDark: string;
    onSilverDark: string;
    silverDarkest: string;
    onSilverDarkest: string;
  };

export type GoldColorsTypes = {
    gold: string;
    onGold: string;
    goldLight: string;
    onGoldLight: string;
    goldLightest: string;
    onGoldLightest: string;
    goldDark: string;
    onGoldDark: string;
    goldDarkest: string;
    onGoldDarkest: string;
  };
export type SapphireColorsTypes = {
    sapphire: string;
    onSapphire: string;
    sapphireLight: string;
    onSapphireLight: string;
    sapphireLightest: string;
    onSapphireLightest: string;
    sapphireDark: string;
    onSapphireDark: string;
    sapphireDarkest: string;
    onSapphireDarkest: string;
  };

export type DiamondColorsTypes = {
    diamond: string;
    onDiamond: string;
    diamondLight: string;
    onDiamondLight: string;
    diamondLightest: string;
    onDiamondLightest: string;
    diamondDark: string;
    onDiamondDark: string;
    diamondDarkest: string;
    onDiamondDarkest: string;
  };

export type DiamondPlusColorsTypes = {
    diamondPlus: string;
    onDiamondPlus: string;
    diamondPlusLight: string;
    onDiamondPlusLight: string;
    diamondPlusLightest: string;
    onDiamondPlusLightest: string;
    diamondPlusDark: string;
    onDiamondPlusDark: string;
    diamondPlusDarkest: string;
    onDiamondPlusDarkest: string;
  };

type growthPlanColorsTypes = {
    crystal: CrystalColorsTypes;
    bronze: BronzeColorsTypes;
    silver: SilverColorsTypes;
    gold: GoldColorsTypes;
    sapphire: SapphireColorsTypes
    diamond: DiamondColorsTypes;
    diamondPlus: DiamondPlusColorsTypes;
  };

export type GrowthPlanColorsTypes = {
    color: growthPlanColorsTypes;
  };

export const grouwthPlanColors: GrowthPlanColorsTypes = {

  color: {
    crystal: {
      crystal: '#75B7F0',
      onCrystal: '#111111',
      crystalLight: '#BADBF7',
      onCrystalLight: '#111111',
      crystalLightest: '#D1E7FA',
      onCrystalLightest: '#111111',
      crystalDark: '#0F518A',
      onCrystalDark: '#FFFFFF',
      crystalDarkest: '#093053',
      onCrystalDarkest: '#FFFFFF'
    },
    bronze: {
      bronze: '#DE713B',
      onBronze: '#111111',
      bronzeLight: '#F7C6BA',
      onBronzeLight: '#111111',
      bronzeLightest: '#FBE1DA',
      onBronzeLightest: '#111111',
      bronzeDark: '#7B3715',
      onBronzeDark: '#FFFFFF',
      bronzeDarkest: '#441E0C',
      onBronzeDarkest: '#FFFFFF'

    },
    silver: {
      silver: '#859DB7',
      onSilver: '#111111',
      silverLight: '#BFCCD9',
      onSilverLight: '#111111',
      silverLightest: '#E1E7ED',
      onSilverLightest: '#111111',
      silverDark: '#35475A',
      onSilverDark: '#FFFFFF',
      silverDarkest: '#1E2632',
      onSilverDarkest: '#FFFFFF'
    },
    gold: {
      gold: '#DA9E2F',
      onGold: '#111111',
      goldLight: '#EED3A0',
      onGoldLight: '#111111',
      goldLightest: '#F8ECD6',
      onGoldLightest: '#111111',
      goldDark: '#7A5716',
      onGoldDark: '#FFFFFF',
      goldDarkest: '#44300C',
      onGoldDarkest: '#FFFFFF'
    },
    sapphire: {
      sapphire: '#006EFF',
      onSapphire: '#111111',
      sapphireLight: '#99C4FF',
      onSapphireLight: '#111111',
      sapphireLightest: '#E0F0FF',
      onSapphireLightest: '#111111',
      sapphireDark: '#0052C7',
      onSapphireDark: '#FFFFFF',
      sapphireDarkest: '#003985',
      onSapphireDarkest: '#FFFFFF'
    },
    diamond: {
      diamond: '#A26CE0',
      onDiamond: '#111111',
      diamondLight: '#CAABED',
      onDiamondLight: '#111111',
      diamondLightest: '#E6D7F7',
      onDiamondLightest: '#111111',
      diamondDark: '#451977',
      onDiamondDark: '#FFFFFF',
      diamondDarkest: '#260E42',
      onDiamondDarkest: '#FFFFFF'
    },
    diamondPlus: {
      diamondPlus: '#3C4F77',
      onDiamondPlus: '#FFFFFF',
      diamondPlusLight: '#BBC6DD',
      onDiamondPlusLight: '#FFFFFF',
      diamondPlusLightest: '#DDE3EE',
      onDiamondPlusLightest: '#FFFFFF',
      diamondPlusDark: '#293651',
      onDiamondPlusDark: '#FFFFFF',
      diamondPlusDarkest: '#1B2436',
      onDiamondPlusDarkest: '#FFFFFF'
    }
  }
}

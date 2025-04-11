export type SeedColorsTypes = {
    seed: string;
    onSeed: string;
    seedLight: string;
    onSeedLight: string;
    seedLightest: string;
    onSeedLightest: string;
    seedDark: string;
    onSeedDark: string;
    seedDarkest: string;
    onSeedDarkest: string;
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

type growthPlanColorsTypes = {
    seed: SeedColorsTypes;
    bronze: BronzeColorsTypes;
    silver: SilverColorsTypes;
    gold: GoldColorsTypes;
    diamond: DiamondColorsTypes;
    sapphire: SapphireColorsTypes;
  };

export type GrowthPlanColorsTypes = {
    color: growthPlanColorsTypes;
  };

export const grouwthPlanColors: GrowthPlanColorsTypes = {

  color: {
    seed: {
      seed: '#9ADA25',
      onSeed: '#111111',
      seedLight: '#C6EA84',
      onSeedLight: '#111111',
      seedLightest: '#ECF8D6',
      onSeedLightest: '#111111',
      seedDark: '#5CA300',
      onSeedDark: '#111111',
      seedDarkest: '#30440C',
      onSeedDarkest: '#FFFFFF'
    },
    bronze: {
      bronze: '#DA6125',
      onBronze: '#111111',
      bronzeLight: '#EAA684',
      onBronzeLight: '#111111',
      bronzeLightest: '#F8E1D6',
      onBronzeLightest: '#111111',
      bronzeDark: '#7B3715',
      onBronzeDark: '#FFFFFF',
      bronzeDarkest: '#441E0C',
      onBronzeDarkest: '#FFFFFF'

    },
    silver: {
      silver: '#7B8C9F',
      onSilver: '#111111',
      silverLight: '#BEC7D0',
      onSilverLight: '#111111',
      silverLightest: '#E3E7EB',
      onSilverLightest: '#111111',
      silverDark: '#3C4753',
      onSilverDark: '#FFFFFF',
      silverDarkest: '#22272E',
      onSilverDarkest: '#FFFFFF'
    },
    gold: {
      gold: '#DAAC25',
      onGold: '#111111',
      goldLight: '#EAD084',
      onGoldLight: '#111111',
      goldLightest: '#F8EFD6',
      onGoldLightest: '#111111',
      goldDark: '#7B6115',
      onGoldDark: '#FFFFFF',
      goldDarkest: '#44360C',
      onGoldDarkest: '#FFFFFF'
    },
    diamond: {
      diamond: '#A057F2',
      onDiamond: '#111111',
      diamondLight: '#B784EA',
      onDiamondLight: '#111111',
      diamondLightest: '#E7D6F8',
      onDiamondLightest: '#111111',
      diamondDark: '#47157B',
      onDiamondDark: '#FFFFFF',
      diamondDarkest: '#280C44',
      onDiamondDarkest: '#FFFFFF'
    },
    sapphire: {
      sapphire: '#257FDA',
      onSapphire: '#111111',
      sapphireLight: '#99C4FF',
      onSapphireLight: '#111111',
      sapphireLightest: '#D6E7F8',
      onSapphireLightest: '#111111',
      sapphireDark: '#15477B',
      onSapphireDark: '#FFFFFF',
      sapphireDarkest: '#0C2844',
      onSapphireDarkest: '#FFFFFF'
    }
  }
}

export interface IAvatarSizes {
  tiny: IAvatarProperties;
  small: IAvatarProperties;
  standard: IAvatarProperties;
  large: IAvatarProperties;
  huge: IAvatarProperties;
}

interface IAvatarProperties {
  size: number;
  fontSize: string;
}

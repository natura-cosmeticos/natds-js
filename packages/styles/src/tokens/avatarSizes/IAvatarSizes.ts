/**
 * @todo Separate classes from IAvatarSizes.ts file
 */
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

export default interface IAvatarSizes {
  tiny: IAvatarProperties;
  small: IAvatarProperties;
  standard: IAvatarProperties;
  large: IAvatarProperties;
  xlarge: IAvatarProperties;
}

interface IAvatarProperties {
  size: number;
  fontSize: string;
}

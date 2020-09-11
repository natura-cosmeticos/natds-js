/**
 * @deprecated IFont is deprecated since v0.20 and will be removed at v1.0.
 * Please use typography token from a theme, or interfaces from `natds-themes`
 */
export interface IFont {
  fontSize: string | number;
  fontWeight: number;
  letterSpacing?: number;
  lineHeight?: number;
}

/* eslint-disable no-magic-numbers */
export interface IProgressIndicatorProps {

  /**
   * Override or extend the styles applied to the component.
   *
   * @optional
   * @type object
   */
  className?: string;

  /**
   * The size of the circle.
   *
   * @default 48
   * @optional
   * @type number
   */
  size?: 24 | 32 | 48 | 64
}

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
   * If `true`, a layer will be applied behind the progress indicator
   *
   * @default false
   * @optional
   * @type boolean
   */
  showLayer?: boolean;

  /**
   * The size of the circle.
   *
   * @default 48
   * @optional
   * @type number
   */
  size?: 24 | 32 | 48 | 64;
}

import { SkeletonProps } from "@material-ui/lab/Skeleton";
import { SizePropValue } from "../../hooks/useSizeStyleProp";

export interface ISkeletonProps extends Omit<SkeletonProps,
  "height" |
  "width"
  > {

  /**
   * Height of the skeleton.
   *
   * Useful when you want to adapt the skeleton to a element - for instance, a card.
   *
   * @optional
   * @type SizePropValue
   */
  height?: SizePropValue,

  /**
   * Width of the skeleton.
   *
   * Useful when the skeleton is inside an inline element with no width of its own.
   *
   * @optional
   * @type SizePropValue
   */
  width?: SizePropValue
}

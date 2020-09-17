import { SkeletonProps } from "@material-ui/lab/Skeleton";
import { SizeProp } from "../shared/SizeProp";

export interface ISkeletonProps extends Pick<SkeletonProps,
  "animation" |
  "children" |
  "variant"
  > {

  /**
   * Height of the skeleton.
   *
   * Useful when you want to adapt the skeleton to a element - for instance, a card.
   *
   * @optional
   * @type SizeProp
   */
  height?: SizeProp,

  /**
   * Width of the skeleton.
   *
   * Useful when the skeleton is inside an inline element with no width of its own.
   *
   * @optional
   * @type SizeProp
   */
  width?: SizeProp
}

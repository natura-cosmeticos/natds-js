import { SkeletonProps } from "@material-ui/lab/Skeleton";
import { ISizes } from "@naturacosmeticos/natds-styles";

export interface ISkeletonProps extends Pick<SkeletonProps,
  "animation" |
  "children" |
  "variant"
  > {

  /**
   * Height of the skeleton.
   *
   *Useful when you want to adapt the skeleton to a element - for instance, a card.
   */
  height?: keyof ISizes,

  /**
   * Width of the skeleton. Useful when the skeleton is inside an inline element with no width of its own.
   */
  width?: keyof ISizes
}

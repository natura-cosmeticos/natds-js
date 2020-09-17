import { GridProps } from "@material-ui/core/Grid";

export type IGridContainerProps = Omit<GridProps, "container" | "item" | "lg" | "md" | "sm" | "xl" | "xs">;

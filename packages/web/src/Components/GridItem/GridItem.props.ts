import { GridProps } from "@material-ui/core/Grid";

export type IGridItemProps = Omit<GridProps, "container" | "item" | "spacing">;

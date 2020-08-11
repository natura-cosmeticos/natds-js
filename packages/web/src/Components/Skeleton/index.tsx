/* eslint-disable @typescript-eslint/no-explicit-any */
import MaterialSkeleton from "@material-ui/lab/Skeleton";
import React from "react";
import {ISkeletonProps} from "./ISkeletonProps";

export {ISkeletonProps} from "./ISkeletonProps";

export const Skeleton : (props: ISkeletonProps, ref: any) => JSX.Element = (props: ISkeletonProps, ref: any) => <MaterialSkeleton {...props} ref={ref} />;
const DefaultSkeleton = React.forwardRef<HTMLElement, ISkeletonProps>(Skeleton);

DefaultSkeleton.displayName = "Skeleton";
export default DefaultSkeleton;

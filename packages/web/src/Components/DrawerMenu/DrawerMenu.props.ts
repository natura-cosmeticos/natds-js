import * as React from "react";
import { IDrawerMenuSectionProps } from "./DrawerMenuSection";

export interface IDrawerMenuProps {
  children?: React.ReactNode;
  component?: React.ElementType;
  list?: [IDrawerMenuSectionProps];
}

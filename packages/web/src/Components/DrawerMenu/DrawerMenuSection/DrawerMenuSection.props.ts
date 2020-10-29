import * as React from "react";
import { IDrawerMenuItemProps } from "../DrawerMenuItem";

export interface IDrawerMenuSectionProps extends IDrawerMenuItemProps {
  list?: [IDrawerMenuSectionProps];
  onToggle?: (event: React.SyntheticEvent, state: boolean, name?: string) => void;
  opened?: boolean;
}

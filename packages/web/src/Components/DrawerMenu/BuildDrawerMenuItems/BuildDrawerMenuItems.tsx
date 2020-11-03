// eslint-disable-next-line no-use-before-define
import * as React from "react";
import { DrawerMenuSection, IDrawerMenuSectionProps } from "../DrawerMenuSection";
import { DrawerMenuItem } from "../DrawerMenuItem";

export const BuildDrawerMenuItems = (props: IDrawerMenuSectionProps, key: number) => {
  if (props.list) {
    return <DrawerMenuSection key={key} {...props} />;
  }

  return <DrawerMenuItem key={key} {...props} />;

};

BuildDrawerMenuItems.displayName = "BuildDrawerMenuItems";

export default BuildDrawerMenuItems;

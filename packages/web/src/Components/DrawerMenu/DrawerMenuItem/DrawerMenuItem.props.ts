import * as React from "react";
import { IThemeWeb } from "../../../Themes";
import { IDrawerMenuSectionProps } from "../DrawerMenuSection";
import { IconName } from "../../Icon";

export interface IDrawerMenuItemProps {
  badge?: string;
  icon?: IconName;
  list?: [IDrawerMenuSectionProps];
  name?: string;
  onSelect?: (event: React.SyntheticEvent, name?: string) => void;
  onToggle?: (event: React.SyntheticEvent, state: boolean, name: string) => void;
  opened?: boolean;
  section?: string;
  selected?: boolean;

  /**
   * @deprecated `theme` property is deprecated since 0.22
   *
   * Please wrap your application with `<Provider>` component.
   */
  theme?: IThemeWeb | unknown
}

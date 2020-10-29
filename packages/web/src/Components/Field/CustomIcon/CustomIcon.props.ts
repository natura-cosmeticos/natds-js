import * as React from "react";

export interface ICustomIconProps {
  icon?: React.ComponentType | undefined;
  onIconPress?: () => (void);
}

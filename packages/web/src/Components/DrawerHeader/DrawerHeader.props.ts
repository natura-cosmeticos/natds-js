import * as React from "react";

export interface IDrawerHeaderProps {
  avatarChildren?: React.ReactNode;
  avatarSrc?: string;
  children?: React.ReactNode;
  component?: React.ElementType;
  primary?: React.ReactNode;
  secondary?: React.ReactNode;
}

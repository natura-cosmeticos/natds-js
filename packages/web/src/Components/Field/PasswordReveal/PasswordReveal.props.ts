import * as React from "react";

export interface IPasswordRevealProps {
  hidePasswordIcon?: React.ComponentType | string;
  onTogglePasswordReveal: React.Dispatch<React.SetStateAction<boolean>>;

  /**
   * @type bool
   */
  showing: boolean;
  showPasswordIcon?: React.ComponentType | string;
}

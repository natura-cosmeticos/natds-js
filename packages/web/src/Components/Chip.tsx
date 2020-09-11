import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialChip, { ChipProps } from "@material-ui/core/Chip";
import { IThemeWeb } from "../Themes";
import Icon from "./Icon";

export interface IChipProps extends ChipProps {

  /**
   * @optional
   */
  theme?: IThemeWeb | unknown;
}

export const Chip: FunctionComponent<IChipProps> = forwardRef((
  props: IChipProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => {
  const { deleteIcon: providedDeletedIcon } = props,
    deleteIcon = React.isValidElement(providedDeletedIcon)
      ? providedDeletedIcon
      : <Icon name="filled-action-cancel" />;

  return (
    <MaterialChip {...props} deleteIcon={deleteIcon} ref={ref} />
  );
});

Chip.displayName = "Chip";

export default withTheme(Chip);

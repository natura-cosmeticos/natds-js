import * as React from "react";
import MaterialChip from "@material-ui/core/Chip";
import { Icon } from "../Icon";
import { IChipProps } from "./Chip.props";

/**
 * For more advanced usages, check [Material UI Chip docs](https://material-ui.com/components/chips/)
 *
 * ## Importing
 *
 * ```
 * import { Chip } from '@naturacosmeticos/natds-web';
 * ```
 *
 * @see https://material-ui.com/components/chips/
 */
export const Chip = React.forwardRef<HTMLDivElement, IChipProps>((
  props: IChipProps, ref,
) => {
  const {
    deleteIcon, onDelete, size, ...otherProps
  } = props;

  const iconFactory = () => {

    if (!React.isValidElement(deleteIcon)) {
      const iconSize = size === "small" ? "micro" : "tiny";

      return <Icon name="filled-action-cancel" size={iconSize} />;
    }

    return deleteIcon;
  };

  /**
   * @see https://material-ui.com/guides/composition/#caveat-with-inlining
   */
  const validDeleteIcon = React.useMemo(iconFactory, [deleteIcon, size]);

  return (
    <MaterialChip
      deleteIcon={onDelete && validDeleteIcon}
      onDelete={onDelete}
      size={size}
      {...otherProps}
      ref={ref}
    />
  );
});

Chip.displayName = "Chip";

export default Chip;

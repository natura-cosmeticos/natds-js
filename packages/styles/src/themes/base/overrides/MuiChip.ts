import {sizes} from "../../../tokens/sizes";
import {fontSize} from "../../../tokens/fontSize";

export const MuiChip = {
  deleteIcon: {
    fontSize: `${sizes.standard}px`,
    height: `${sizes.standard}px`,
    width: `${sizes.standard}px`,
  },
  deleteIconSmall: {
    fontSize: `${sizes.small}px`,
    height: `${sizes.small}px`,
    width: `${sizes.small}px`,
  },
  icon: {
    fontSize: `${sizes.standard}px`,
  },
  iconSmall: {
    fontSize: `${sizes.small}px`,
    height: `${sizes.small}px`,

    /**
     * @todo replace hardcoded value with a spacing/margin token
     */
    marginTop: "1px",
    width: `${sizes.small}px`,
  },
  root: {
    fontSize: fontSize.subtitle2.fontSize,
  }
};

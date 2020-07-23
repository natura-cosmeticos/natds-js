import {spacing} from "../../../tokens/spacing";
import {fontSize} from "../../../tokens/fontSize";

export const MuiAlert = {
  root: {

    /**
     * @todo replace hardcoded value with a size/width token
     */
    width: 278,
    padding: spacing.spacingSmall,
    ...fontSize.body1,
  },
  icon: {
    marginRight: spacing.spacingTiny,
  },
  message: {
    padding: "5px 0",
  },
};

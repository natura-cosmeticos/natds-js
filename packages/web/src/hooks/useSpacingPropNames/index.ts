/* eslint-disable array-element-newline */

import { SpacingStylePropKey, SpacingMarginAndPaddingProps } from "../../Components/Spacing/Spacing.props";

type SpacingMarginAndPaddingPropsArray = Array<keyof SpacingMarginAndPaddingProps>;
type GetSpacingPropNamesFunc = (stylePropName: SpacingStylePropKey) => SpacingMarginAndPaddingPropsArray

export const getSpacingPropNames: GetSpacingPropNamesFunc = (stylePropName: SpacingStylePropKey) => {

  const spacingPropsToCssPropsMap : Record<SpacingStylePropKey, SpacingMarginAndPaddingPropsArray> = {
    marginBottom: ["marginBottom", "mb", "marginY", "my", "margin", "m"],
    marginLeft: ["marginLeft", "ml", "marginX", "mx", "margin", "m"],
    marginRight: ["marginRight", "mr", "marginX", "mx", "margin", "m"],
    marginTop: ["marginTop", "mt", "marginY", "my", "margin", "m"],
    paddingBottom: ["paddingBottom", "pb", "paddingY", "py", "padding", "p"],
    paddingLeft: ["paddingLeft", "pl", "paddingX", "px", "padding", "p"],
    paddingRight: ["paddingRight", "pr", "paddingX", "px", "padding", "p"],
    paddingTop: ["paddingTop", "pr", "paddingY", "py", "padding", "p"],
  };

  return spacingPropsToCssPropsMap[stylePropName];

};

export const useSpacingPropNames: GetSpacingPropNamesFunc = (stylePropName) => getSpacingPropNames(stylePropName);

export default useSpacingPropNames;

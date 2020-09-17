/* eslint-disable array-element-newline */

import { createStyles } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { SpacingCssPropKey, SpacingMarginAndPaddingProps } from "./Spacing.props";
import { IThemeWeb } from "../../Themes";
import { getSizeFromProp } from "../shared/getSizeFromProp";

type SpacingMarginAndPaddingPropsArray = Array<keyof SpacingMarginAndPaddingProps>;

const getSpacingPropsArray = (stylePropKey : SpacingCssPropKey) => {

  const spacingPropsToCssPropsMap : Record<SpacingCssPropKey, SpacingMarginAndPaddingPropsArray> = {
    marginBottom: ["marginBottom", "mb", "marginY", "my", "margin", "m"],
    marginLeft: ["marginLeft", "ml", "marginX", "mx", "margin", "m"],
    marginRight: ["marginRight", "mr", "marginX", "mx", "margin", "m"],
    marginTop: ["marginTop", "mt", "marginY", "my", "margin", "m"],
    paddingBottom: ["paddingBottom", "pb", "paddingY", "py", "padding", "p"],
    paddingLeft: ["paddingLeft", "pl", "paddingX", "px", "padding", "p"],
    paddingRight: ["paddingRight", "pr", "paddingX", "px", "padding", "p"],
    paddingTop: ["paddingTop", "pr", "paddingY", "py", "padding", "p"],
  };

  return spacingPropsToCssPropsMap[stylePropKey];
};

const getSpacingValue = (propKey: SpacingCssPropKey, { props, theme }: {props: SpacingMarginAndPaddingProps, theme: IThemeWeb}) => {

  const spacingPropsArray : SpacingMarginAndPaddingPropsArray = getSpacingPropsArray(propKey);

  const mappedValuesArray = spacingPropsArray.map((spacingPropKey) => {

    const sizePropValue = props[spacingPropKey];

    return getSizeFromProp({
      sizePropValue,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      sizeTokenFromTheme: typeof sizePropValue !== "undefined" && theme.sizes[sizePropValue],
    });

  });

  return mappedValuesArray.find((value) => ![null, ""].includes(value as string));

};

export const useStyles = makeStyles((theme: IThemeWeb) => createStyles({
  root: (props: SpacingMarginAndPaddingProps) => ({
    marginBottom: getSpacingValue("marginBottom", { props, theme }),
    marginLeft: getSpacingValue("marginLeft", { props, theme }),
    marginRight: getSpacingValue("marginRight", { props, theme }),
    marginTop: getSpacingValue("marginTop", { props, theme }),
    paddingBottom: getSpacingValue("paddingBottom", { props, theme }),
    paddingLeft: getSpacingValue("paddingLeft", { props, theme }),
    paddingRight: getSpacingValue("paddingRight", { props, theme }),
    paddingTop: getSpacingValue("paddingTop", { props, theme }),
  }),
}), { name: "NatDSSpacing" });

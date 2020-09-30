import { createStyles, makeStyles } from "@material-ui/core/styles";
import { IThemeWeb } from "../../Themes";
import { SpacingMarginAndPaddingProps } from "./Spacing.props";
import { getSpacingFromStyleProp } from "../../hooks/useSpacingFromStyleProp";

export const useStyles = makeStyles((theme: IThemeWeb) => createStyles({
  root: (props: SpacingMarginAndPaddingProps) => ({
    marginBottom: getSpacingFromStyleProp({
      props,
      stylePropName: "marginBottom",
      theme,
    }),
    marginLeft: getSpacingFromStyleProp({
      props,
      stylePropName: "marginLeft",
      theme,
    }),
    marginRight: getSpacingFromStyleProp({
      props,
      stylePropName: "marginRight",
      theme,
    }),
    marginTop: getSpacingFromStyleProp({
      props,
      stylePropName: "marginTop",
      theme,
    }),
    paddingBottom: getSpacingFromStyleProp({
      props,
      stylePropName: "paddingBottom",
      theme,
    }),
    paddingLeft: getSpacingFromStyleProp({
      props,
      stylePropName: "paddingLeft",
      theme,
    }),
    paddingRight: getSpacingFromStyleProp({
      props,
      stylePropName: "paddingRight",
      theme,
    }),
    paddingTop: getSpacingFromStyleProp({
      props,
      stylePropName: "paddingTop",
      theme,
    }),
  }),
}), { name: "NatDSSpacing" });

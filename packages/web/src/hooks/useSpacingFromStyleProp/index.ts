import useTheme from "@material-ui/core/styles/useTheme";
import { getSpacingPropNames } from "../useSpacingPropNames";
import { getSizeStyleProp } from "../useSizeStyleProp";
import { ISpacingProps } from "../../Components/Spacing";
import { SpacingStylePropKey } from "../../Components/Spacing/Spacing.props";
import { IThemeWeb } from "../../Themes";

type UseSpacingFromStylePropValueArgs = {
  props: ISpacingProps,
  stylePropName: SpacingStylePropKey,
}

interface GetArgs extends UseSpacingFromStylePropValueArgs {
  theme: IThemeWeb
}

type GetSpacingPropValueFunc = ({ props, stylePropName, theme } : GetArgs) => string | number | undefined;

export const getSpacingFromStyleProp : GetSpacingPropValueFunc = ({ props, stylePropName, theme }) => {
  const spacingPropNames = getSpacingPropNames(stylePropName);

  const spacingPropValues = spacingPropNames.map((componentPropKey) => {

    const value = props[componentPropKey];

    return getSizeStyleProp({ theme, value });

  });

  return spacingPropValues.find((value) => ![null, ""].includes(value as string));
};

type UseArgs = ({ props, stylePropName } : UseSpacingFromStylePropValueArgs) => string | number | undefined;

export const useSpacingFromStylePropValue : UseArgs = ({ props, stylePropName }) => {
  const theme : IThemeWeb = useTheme();

  return getSpacingFromStyleProp({ props, stylePropName, theme });
};

export default useSpacingFromStylePropValue;

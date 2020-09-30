import { ArgType } from "@storybook/addons";
import { ISpacingProps } from "./Spacing.props";
import spacingPropArgType from "../../../.storybook/argTypes/spacingPropArgType";

type ArgTypesKey = keyof ISpacingProps | string;

export const spacingArgTypes : Record<ArgTypesKey, ArgType> = {
  margin: spacingPropArgType,
  padding: spacingPropArgType,
  marginBottom: spacingPropArgType,
  marginLeft: spacingPropArgType,
  marginRight: spacingPropArgType,
  marginTop: spacingPropArgType,
  marginX: spacingPropArgType,
  marginY: spacingPropArgType,
  paddingBottom: spacingPropArgType,
  paddingLeft: spacingPropArgType,
  paddingRight: spacingPropArgType,
  paddingTop: spacingPropArgType,
  paddingX: spacingPropArgType,
  paddingY: spacingPropArgType,
};

export const spacingAliasArgTypes : Record<ArgTypesKey, ArgType> = {
  // eslint-disable-next-line id-length
  m: spacingPropArgType,
  mb: spacingPropArgType,
  ml: spacingPropArgType,
  mr: spacingPropArgType,
  mt: spacingPropArgType,
  mx: spacingPropArgType,
  my: spacingPropArgType,
  // eslint-disable-next-line id-length
  p: spacingPropArgType,
  pb: spacingPropArgType,
  pl: spacingPropArgType,
  pr: spacingPropArgType,
  pt: spacingPropArgType,
  px: spacingPropArgType,
  py: spacingPropArgType,
};

export const argTypes : Record<ArgTypesKey, ArgType> = {
  ...spacingArgTypes,
  children: {},
  component: {},
  ...spacingAliasArgTypes,
};

export default argTypes;

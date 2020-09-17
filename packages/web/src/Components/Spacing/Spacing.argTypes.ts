import { ISpacingProps } from "./Spacing.props";
import { SizeArgType } from "../shared/SizeArgType";
import { spacingPropArgType } from "../shared";

type ArgTypesKey = keyof ISpacingProps | string;

export const spacingArgTypes : Record<ArgTypesKey, SizeArgType> = {
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

export const spacingAliasArgTypes : Record<ArgTypesKey, SizeArgType> = {
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

type ArgTypesValue = SizeArgType | Record<string, unknown>;

export const argTypes : Record<ArgTypesKey, ArgTypesValue> = {
  ...spacingArgTypes,
  children: {},
  component: {},
  ...spacingAliasArgTypes,
};

export default argTypes;

import { tokens } from "@naturacosmeticos/natds-styles";
import { ISpacingProps } from "./Spacing.props";

type SpacingSizeControl = { options: string[]; type: string };

const control: SpacingSizeControl = {
  options: Object.keys(tokens.sizes),
  type: "select",
};

export const spacingArgTypes : Record<keyof ISpacingProps | string, { control: SpacingSizeControl }> = {
  margin: { control },
  padding: { control },
  marginBottom: { control },
  marginLeft: { control },
  marginRight: { control },
  marginTop: { control },
  marginX: { control },
  marginY: { control },
  paddingBottom: { control },
  paddingLeft: { control },
  paddingRight: { control },
  paddingTop: { control },
  paddingX: { control },
  paddingY: { control },
};

export const spacingAliasArgTypes : Record<keyof ISpacingProps | string, { control: SpacingSizeControl }> = {
  // eslint-disable-next-line id-length
  m: { control },
  mb: { control },
  ml: { control },
  mr: { control },
  mt: { control },
  mx: { control },
  my: { control },
  // eslint-disable-next-line id-length
  p: { control },
  pb: { control },
  pl: { control },
  pr: { control },
  pt: { control },
  px: { control },
  py: { control },
};

export const argTypes : Record<keyof ISpacingProps | string, { control?: SpacingSizeControl }> = {
  ...spacingArgTypes,
  children: {},
  component: {},
  ...spacingAliasArgTypes,
};

export default argTypes;

import { ToolbarVariant } from "./Toolbar.props";

type ToolbarVariantArgs = { variant?: ToolbarVariant }
export type ToolbarMaterialVariant = "regular" | "dense";

export const getVariantForMaterial: ({ variant }: ToolbarVariantArgs) => ToolbarMaterialVariant = ({ variant } : ToolbarVariantArgs) => {
  if (typeof variant === "undefined" || variant === "prominent") {
    return "regular";
  }

  return variant;
};

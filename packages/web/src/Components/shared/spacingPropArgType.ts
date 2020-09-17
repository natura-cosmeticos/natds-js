/**
 * @todo migrate to `natds-themes` tokens
 */
import { ISizes, tokens } from "@naturacosmeticos/natds-styles";
import { SizeArgType } from "./SizeArgType";

const sizeTokenNames = Object.keys(tokens.sizes) as Array<keyof ISizes>;

export const spacingPropArgType: SizeArgType = {
  control: {
    options: ["auto", ...sizeTokenNames],
    type: "select",
  },
  table: {
    defaultValue: {
      summary: "none",
    },
  },
};

export default spacingPropArgType;

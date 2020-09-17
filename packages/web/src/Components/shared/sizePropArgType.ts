/**
 * @todo migrate to `natds-themes` tokens
 */
import { ISizes, tokens } from "@naturacosmeticos/natds-styles";
import { SizeArgType } from "./SizeArgType";

const sizeTokenNames = Object.keys(tokens.sizes) as Array<keyof ISizes>;

export const sizePropArgType: SizeArgType = {
  control: {
    options: ["auto", ...sizeTokenNames],
    type: "select",
  },
  table: {
    defaultValue: {
      summary: "auto",
    },
  },
};

export default sizePropArgType;

import { ISizes } from "@naturacosmeticos/natds-styles";

type Options = "auto" | keyof ISizes;

export type SizeArgType = {
  control: {

    /**
     * @todo adopt `natds-themes` Size type
     */
    options: Options[];
    type: "select"
  },
  table?: {
    defaultValue?: {
      summary: "auto" | "none"
    }
  }
};

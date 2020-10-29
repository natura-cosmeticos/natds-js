import { IRadioProps } from "../Radio.props";

type Key = "end" | "false" | "start";

export const edges : Record<Key, IRadioProps["edge"]> = {
  end: "end",
  false: false,
  start: "start",
};

export default edges;

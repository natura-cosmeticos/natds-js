import { ISwitchProps } from "../Switch.props";

type Key = "end" | "false" | "start";

export const edges : Record<Key, ISwitchProps["edge"]> = {
  end: "end",
  false: false,
  start: "start",
};

export default edges;

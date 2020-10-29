import { CheckboxEdge } from "../Checkbox.props";

type Key = "end" | "false" | "start";

export const edges : Record<Key, CheckboxEdge> = {
  end: "end",
  false: false,
  start: "start",
};

export default edges;

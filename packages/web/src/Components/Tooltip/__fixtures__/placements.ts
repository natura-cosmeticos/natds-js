import { ITooltipProps } from "../Tooltip.props";

export const placements : Record<ITooltipProps["placement"], ITooltipProps["placement"]> = {
  bottom: "bottom",
  "bottom-end": "bottom-end",
  "bottom-start": "bottom-start",
  left: "left",
  "left-end": "left-end",
  "left-start": "left-start",
  right: "right",
  "right-end": "right-end",
  "right-start": "right-start",
  top: "top",
  "top-end": "top-end",
  "top-start": "top-start",
};

export default placements;

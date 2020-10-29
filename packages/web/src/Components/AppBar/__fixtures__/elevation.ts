import { PaperProps } from "@material-ui/core/Paper";

export const elevation: {
  min: PaperProps["elevation"];
  max: PaperProps["elevation"];
  range: boolean;
  step: PaperProps["elevation"];
  value: PaperProps["elevation"]
} = {
  range: true,
  min: 0,
  max: 24,
  step: 1,
  value: 2,
};

export default elevation;

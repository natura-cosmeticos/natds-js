import { IProgressIndicatorProps } from "./ProgressIndicator.props";
import { getLayerSize } from "./ProgressIndicator.styles";

describe("ProgressIndicator Styles", () => {
  it("should return correct layer size based on size of component", () => {
    const props: IProgressIndicatorProps = {
      size: 48,
    };

    const layerSize = getLayerSize(props);
    const expectedLayerSize = 56;

    expect(layerSize).toBe(expectedLayerSize);
  });
});

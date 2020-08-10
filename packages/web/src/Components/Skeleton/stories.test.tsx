import * as renderer from "react-test-renderer";
import {variants} from "./stories";

describe("Skeleton", () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  describe.each(variants)("when variant is %p", (variant) => {
    it("should render correctly", () => {
      const wrapper = renderer.create(variant.component);

      expect(wrapper).toMatchSnapshot();
    });
  });
});

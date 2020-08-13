import * as renderer from "react-test-renderer";
import {colors} from "./stories";

describe("Fab", () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  describe.each(colors)("when color is %p", (color) => {
    it("should render correctly", () => {
      const wrapper = renderer.create(color.component);

      expect(wrapper).toMatchSnapshot();
    });
  });
});

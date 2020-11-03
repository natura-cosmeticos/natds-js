import { boxShadow } from "./DrawerBody.styles";

describe("DrawerBody styles", () => {
  describe("box shadow", () => {
    describe("when user did not scroll", () => {
      it("should be none", () => {
        const actual = boxShadow({ scrolled: false });

        expect(actual).toBe("none");
      });
    });
    describe("when user scrolled", () => {
      it("should be specified", () => {
        const actual = boxShadow({ scrolled: true });

        expect(actual).toBe("rgba(0, 0, 0, .14) inset 0 9px 5px -5px");
      });
    });
  });
});

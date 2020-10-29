import themes from "./themes";

describe("Themes", () => {
  describe("Avon Dark", () => {
    it("should match snapshot", () => {
      expect(themes.avon.dark).toMatchSnapshot();
    });
  });
  describe("Avon Light", () => {
    it("should match snapshot", () => {
      expect(themes.avon.light).toMatchSnapshot();
    });
  });
  describe("Natura Dark", () => {
    it("should match snapshot", () => {
      expect(themes.natura.dark).toMatchSnapshot();
    });
  });
  describe("Natura Light", () => {
    it("should match snapshot", () => {
      expect(themes.natura.light).toMatchSnapshot();
    });
  });
  describe("The Body Shop Dark", () => {
    it("should match snapshot", () => {
      expect(themes.theBodyShop.dark).toMatchSnapshot();
    });
  });
  describe("The Body Shop Light", () => {
    it("should match snapshot", () => {
      expect(themes.theBodyShop.light).toMatchSnapshot();
    });
  });
});

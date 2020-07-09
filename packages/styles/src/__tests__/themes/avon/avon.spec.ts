import { themes } from "../../../index";

/**
 * @todo Review/enable `one-variable-per-declaration` tslint rule
 * @todo Review/enable `object-literal-shorthand` tslint rule
 */
describe("Avon Theme", () => {
  const { avon: { dark, light } } = themes;
  test("it should match Avon Dark theme snapshot", () => {
    expect(light).toMatchSnapshot("Avon Light Theme");
  });
  test("it should match Avon Dark theme snapshot", () => {
    expect(dark).toMatchSnapshot("Avon Dark Theme");
  });
});

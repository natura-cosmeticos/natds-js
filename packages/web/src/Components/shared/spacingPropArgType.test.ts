import spacingPropArgType from "./sizePropArgType";

describe("Size prop arg type", () => {
  it("should match snapshot", () => {
    expect(spacingPropArgType).toMatchSnapshot();
  });
});

import sizePropArgType from "./sizePropArgType";

describe("Size prop arg type", () => {
  it("should match snapshot", () => {
    expect(sizePropArgType).toMatchSnapshot();
  });
});

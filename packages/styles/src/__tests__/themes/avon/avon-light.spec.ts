import { themes } from "../../../index";

describe("Avon Light Theme", () => {

  it("matches Avon Light theme snapshot", () => {
    const { avon: { light } } = themes;
    expect(light).toMatchSnapshot("Avon Light Theme");
  });

});

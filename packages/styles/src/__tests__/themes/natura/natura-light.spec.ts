import { themes } from "../../../index";

describe("Natura Light Theme", () => {
  it("matches Natura Light Theme snapshot", () => {
    const {
      natura: { light },
    } = themes;

    expect(light).toMatchSnapshot("Natura Light Theme");
  });
});

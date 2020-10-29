import { tokens } from "../../index";

describe("Tokens", () => {
  test("It should match tokens snapshot", () => {
    expect(tokens).toMatchSnapshot("Tokens Snapshot");
  });
});

import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { ProgressIndicator } from "./ProgressIndicator";

describe("ProgressIndicator components", () => {
  it("should match to snapshot - default props", () => {
    const testRenderer = TestRenderer.create(<ProgressIndicator />);

    expect(testRenderer).toMatchSnapshot();
  });

  it("should match to snapshot - with secondary color", () => {
    const testRenderer = TestRenderer.create(<ProgressIndicator color="secondary" />);

    expect(testRenderer).toMatchSnapshot();
  });

  it("should match to snapshot - with inherit color", () => {
    const testRenderer = TestRenderer.create(<ProgressIndicator color="inherit" />);

    expect(testRenderer).toMatchSnapshot();
  });

  it("should match to snapshot - with size 24", () => {
    const testRenderer = TestRenderer.create(<ProgressIndicator size={24} />);

    expect(testRenderer).toMatchSnapshot();
  });

  it("should match to snapshot - with size 32", () => {
    const testRenderer = TestRenderer.create(<ProgressIndicator size={32} />);

    expect(testRenderer).toMatchSnapshot();
  });

  it("should match to snapshot - with size 40", () => {
    const testRenderer = TestRenderer.create(<ProgressIndicator size={48} />);

    expect(testRenderer).toMatchSnapshot();
  });

  it("should match to snapshot - with disableShrink enabled", () => {
    const testRenderer = TestRenderer.create(<ProgressIndicator disableShrink={true} />);

    expect(testRenderer).toMatchSnapshot();
  });
});

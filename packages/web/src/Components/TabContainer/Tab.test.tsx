import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { TabContainer } from "./TabContainer";
import { TabItem } from "../TabItem";

describe("Tab components", () => {
  describe("rendering variants", () => {
    test("should match to snapshot - empty TabContainer", () => {
      const testRenderer = TestRenderer.create(<TabContainer value={false} />);

      expect(testRenderer).toMatchSnapshot("TabContainer empty snapshot");
    });

    test("should match to snapshot - with TabContainer textColor applied", () => {
      const testRenderer = TestRenderer.create(<TabContainer value={false} textColor="secondary">
        <TabItem label="Item One" />
        <TabItem label="Item Two" />
        <TabItem label="Item Three" />
      </TabContainer>);

      expect(testRenderer).toMatchSnapshot("TabContainer textColor applied snapshot");
    });

    test("should match to snapshot - with TabContainer indicatorColor applied", () => {
      const testRenderer = TestRenderer.create(<TabContainer value={false} indicatorColor="secondary">
        <TabItem label="Item One" />
        <TabItem label="Item Two" />
        <TabItem label="Item Three" />
      </TabContainer>);

      expect(testRenderer).toMatchSnapshot("TabContainer indicatorColor applied snapshot");
    });

    test("should match to snapshot - with TabContainer centered ", () => {
      const testRenderer = TestRenderer.create(<TabContainer value={false} centered>
        <TabItem label="Item One" />
        <TabItem label="Item Two" />
        <TabItem label="Item Three" />
      </TabContainer>);

      expect(testRenderer).toMatchSnapshot("TabContainer indicatorColor centered snapshot");
    });

    test("should match to snapshot - with TabItem disabled ", () => {
      const testRenderer = TestRenderer.create(<TabContainer value={false}>
        <TabItem label="Item One" disabled />
        <TabItem label="Item Two" disabled />
        <TabItem label="Item Three" disabled />
      </TabContainer>);

      expect(testRenderer).toMatchSnapshot("TabContainer indicatorColor disabled snapshot");
    });
  });
});

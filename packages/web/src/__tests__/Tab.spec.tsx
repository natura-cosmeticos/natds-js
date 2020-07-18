import * as React from "react";

import { expect } from "chai";
import { mount } from "enzyme";
import { TabContainer, TabItem } from "..";

describe("Tab components", () => {
  describe("rendering variants", () => {
    test("should match to snapshot - empty TabContainer", () => {
      const component = mount(<TabContainer value={false} />);

      expect(component).matchSnapshot("TabContainer empty snapshot");
    });

    test("should match to snapshot - with TabContainer textColor applied", () => {
      const component = mount(<TabContainer value={false} textColor="secondary">
        <TabItem label="Item One" />
        <TabItem label="Item Two" />
        <TabItem label="Item Three" />
      </TabContainer>);

      expect(component).matchSnapshot("TabContainer textColor applied snapshot");
    });

    test("should match to snapshot - with TabContainer indicatorColor applied", () => {
      const component = mount(<TabContainer value={false} indicatorColor="secondary">
        <TabItem label="Item One" />
        <TabItem label="Item Two" />
        <TabItem label="Item Three" />
      </TabContainer>);

      expect(component).matchSnapshot("TabContainer indicatorColor applied snapshot");
    });

    test("should match to snapshot - with TabContainer centered ", () => {
      const component = mount(<TabContainer value={false} centered>
        <TabItem label="Item One" />
        <TabItem label="Item Two" />
        <TabItem label="Item Three" />
      </TabContainer>);

      expect(component).matchSnapshot("TabContainer indicatorColor centered snapshot");
    });

    test("should match to snapshot - with TabItem disabled ", () => {
      const component = mount(<TabContainer value={false}>
        <TabItem label="Item One" disabled />
        <TabItem label="Item Two" disabled />
        <TabItem label="Item Three" disabled />
      </TabContainer>);

      expect(component).matchSnapshot("TabContainer indicatorColor disabled snapshot");
    });
  });
});

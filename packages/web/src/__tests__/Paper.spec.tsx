import * as React from "react";
import { mount } from "enzyme";
import { expect } from "chai";

import { Paper } from "..";

describe("Paper components", () => {
  describe("rendering variants", () => {
    test("should match to snapshot - default Paper", () => {
      const component = mount(<Paper />);

      expect(component).matchSnapshot("Paper default snapshot");
    });

    test("should match to snapshot - with elevation", () => {
      const component = mount(<Paper elevation={3} />);

      expect(component).matchSnapshot("Paper with elevation snapshot");
    });

    test("should match to snapshot - with variant outlined", () => {
      const component = mount(<Paper variant="outlined" />);

      expect(component).matchSnapshot("Paper with variant outlined snapshot");
    });

    test("should match to snapshot - with variant outlined square", () => {
      const component = mount(<Paper variant="outlined" square />);

      expect(component).matchSnapshot("Paper with variant outlined square snapshot");
    });
  });
});

import React from "react";
import { expect } from "chai";
import renderer from "react-test-renderer";

import {
  ExpansionPanel,
  ExpansionPanelActions,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from "..";

describe("ExpansionPanel component", () => {
  test("should match snapshot - Simple children", () => {
    const component = renderer.create(<ExpansionPanel><div>content</div></ExpansionPanel>).toJSON();

    expect(component).matchSnapshot("ExpansionPanel with simple children");
  });

  test("should match snapshot - ExpansionPanelActions children", () => {
    const component = renderer.create(<ExpansionPanel><ExpansionPanelActions>content</ExpansionPanelActions></ExpansionPanel>).toJSON();

    expect(component).matchSnapshot("ExpansionPanel with ExpansionPanelActions");
  });

  test("should match snapshot - ExpansionPanelDetails children", () => {
    const component = renderer.create(<ExpansionPanel><ExpansionPanelDetails>content</ExpansionPanelDetails></ExpansionPanel>).toJSON();

    expect(component).matchSnapshot("ExpansionPanel with ExpansionPanelDetails");
  });

  test("should match snapshot - ExpansionPanelSummary children", () => {
    const component = renderer.create(<ExpansionPanel><ExpansionPanelSummary>content</ExpansionPanelSummary></ExpansionPanel>).toJSON();

    expect(component).matchSnapshot("ExpansionPanel with ExpansionPanelSummary");
  });

  test("should match snapshot - ExpansionPanel complete", () => {
    const component = renderer.create(<ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary>Summary</ExpansionPanelSummary>
      <ExpansionPanelDetails>Details</ExpansionPanelDetails>
      <ExpansionPanelActions>Actions</ExpansionPanelActions>
    </ExpansionPanel>).toJSON();

    expect(component).matchSnapshot("ExpansionPanel with complete example");
  });
});

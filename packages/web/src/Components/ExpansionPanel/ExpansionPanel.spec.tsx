import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { ExpansionPanel } from "./ExpansionPanel";
import { ExpansionPanelActions } from "../ExpansionPanelActions";
import { ExpansionPanelSummary } from "../ExpansionPanelSummary";
import { ExpansionPanelDetails } from "../ExpansionPanelDetails";

describe("ExpansionPanel component", () => {
  it("should match snapshot - Simple children", () => {
    const testRenderer = TestRenderer.create(<ExpansionPanel><div>content</div></ExpansionPanel>).toJSON();

    expect(testRenderer).toMatchSnapshot("ExpansionPanel with simple children");
  });

  it("should match snapshot - ExpansionPanelActions children", () => {
    const testRenderer = TestRenderer.create(<ExpansionPanel><ExpansionPanelActions>content</ExpansionPanelActions></ExpansionPanel>).toJSON();

    expect(testRenderer).toMatchSnapshot("ExpansionPanel with ExpansionPanelActions");
  });

  it("should match snapshot - ExpansionPanelDetails children", () => {
    const testRenderer = TestRenderer.create(<ExpansionPanel><ExpansionPanelDetails>content</ExpansionPanelDetails></ExpansionPanel>).toJSON();

    expect(testRenderer).toMatchSnapshot("ExpansionPanel with ExpansionPanelDetails");
  });

  it("should match snapshot - ExpansionPanelSummary children", () => {
    const testRenderer = TestRenderer.create(<ExpansionPanel><ExpansionPanelSummary>content</ExpansionPanelSummary></ExpansionPanel>).toJSON();

    expect(testRenderer).toMatchSnapshot("ExpansionPanel with ExpansionPanelSummary");
  });

  it("should match snapshot - ExpansionPanel complete", () => {
    const testRenderer = TestRenderer.create(<ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary>Summary</ExpansionPanelSummary>
      <ExpansionPanelDetails>Details</ExpansionPanelDetails>
      <ExpansionPanelActions>Actions</ExpansionPanelActions>
    </ExpansionPanel>).toJSON();

    expect(testRenderer).toMatchSnapshot("ExpansionPanel with complete example");
  });
});

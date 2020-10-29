import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "../Button";

describe("ButtonGroup component", () => {
  describe("when size is small", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <ButtonGroup size="small"><Button>One</Button><Button>Two</Button></ButtonGroup>,
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });

  describe("when size is medium", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <ButtonGroup size="medium"><Button>One</Button><Button>Two</Button></ButtonGroup>,
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });

  describe("when size is large", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <ButtonGroup size="large"><Button>One</Button><Button>Two</Button></ButtonGroup>,
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });

  describe("when variant is text", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <ButtonGroup variant="text"><Button>One</Button><Button>Two</Button></ButtonGroup>,
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });

  describe("when variant is outlined", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <ButtonGroup variant="outlined"><Button>One</Button><Button>Two</Button></ButtonGroup>,
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });

  describe("when variant is contained", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <ButtonGroup variant="contained"><Button>One</Button><Button>Two</Button></ButtonGroup>,
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });

});

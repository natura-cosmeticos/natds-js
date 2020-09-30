import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import Menu from "./Menu";
import { MenuItem } from "../MenuItem";
import { Button } from "../Button";

const Component = () => {
  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Button onClick={handleClick}>Open menu</Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)}>
        <MenuItem>Test</MenuItem>
      </Menu>
    </>
  );

};

describe("Menu component", () => {

  let testRenderer : TestRenderer.ReactTestRenderer = {} as TestRenderer.ReactTestRenderer;

  describe("when closed", () => {
    it("should match snapshot", () => {
      testRenderer = TestRenderer.create(<Component />);
      expect(testRenderer).toMatchSnapshot();
    });
  });

});

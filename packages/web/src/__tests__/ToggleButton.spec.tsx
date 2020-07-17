import * as React from "react";
import * as renderer from "react-test-renderer";

import { assert, spy } from "sinon";

import { ToggleButton } from "../Components/ToggleButton";
import { expect } from "chai";
import { shallow } from "enzyme";


interface IMockedIconProps {
  className?: string;
}

const MockedIcon = (props: IMockedIconProps) => <i {...props} />;

describe("ToggleButton component", () => {
  describe("rendering sizes", () => {
    test("should match snapshot - Size Small", () => {
      const component = renderer.create(<ToggleButton size="small" iconOn={<MockedIcon />} iconOff={<MockedIcon />} />).toJSON();

      expect(component).matchSnapshot("ToggleButton Size Small snapshot");
    });

    test("should match snapshot - Size Medium", () => {
      const component = renderer.create(<ToggleButton size="medium" iconOn={<MockedIcon />} iconOff={<MockedIcon />} />).toJSON();

      expect(component).matchSnapshot("ToggleButton Size Medium snapshot");
    });
  });

  describe("rendering colors", () => {
    test("should match snapshot - Color Primary", () => {
      const component = renderer.create(<ToggleButton color="primary" iconOn={<MockedIcon />} iconOff={<MockedIcon />} />).toJSON();

      expect(component).matchSnapshot("ToggleButton Color Primary snapshot");
    });

    test("should match snapshot - Color Secondary", () => {
      const component = renderer.create(<ToggleButton color="secondary" iconOn={<MockedIcon />} iconOff={<MockedIcon />} />).toJSON();

      expect(component).matchSnapshot("ToggleButton Color Secondary snapshot");
    });

    test("should match snapshot - Color Default", () => {
      const component = renderer.create(<ToggleButton color="secondary" iconOn={<MockedIcon />} iconOff={<MockedIcon />} />).toJSON();

      expect(component).matchSnapshot("ToggleButton Color Default snapshot");
    });
  });

  describe("rendering attributes", () => {
    test("should match snapshot - Disabled", () => {
      const component = renderer.create(<ToggleButton color="primary" iconOn={<MockedIcon />} iconOff={<MockedIcon />} disabled />).toJSON();

      expect(component).matchSnapshot("ToggleButton Disabled snapshot");
    });
  });

  describe("interaction", () => {
    test("should call onClick callback", () => {
      const mockOnClick = spy();
      const component = shallow(<ToggleButton iconOff={<MockedIcon />} iconOn={<MockedIcon />} onClick={mockOnClick} />);

      component.simulate("click");

      assert.calledOnce(mockOnClick);
    });

    const FIRST_INDEX = 0,
      LENGTH_EMPTY = 0,
      LENGTH_ONE = 1;

    test("should start checked", () => {
      const component = shallow(<ToggleButton iconOn={<MockedIcon className="on" />} iconOff={<MockedIcon className="off" />} checked={true} />);

      expect(component.dive().find(".on")).to.have.length(LENGTH_ONE);
      expect(component.dive().find(".off")).to.have.length(LENGTH_EMPTY);
    });

    test("should toggle the state icon accordingly", () => {
      const component = shallow(<ToggleButton iconOn={<MockedIcon className="on" />} iconOff={<MockedIcon className="off" />} />);

      expect(component.dive().find(".on")).to.have.length(LENGTH_EMPTY);
      expect(component.dive().find(".off")).to.have.length(LENGTH_ONE);

      component.at(FIRST_INDEX).simulate("click");

      expect(component.dive().find(".on")).to.have.length(LENGTH_ONE);
      expect(component.dive().find(".off")).to.have.length(LENGTH_EMPTY);
    });
  });
});

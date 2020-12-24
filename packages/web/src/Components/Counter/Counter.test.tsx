/* eslint-disable max-lines-per-function */
import * as React from "react";
import * as TestRenderer from "react-test-renderer";

import Counter from "./Counter";
import { InputLabel } from "../InputLabel";
import { TextField } from "../TextField";

describe("Counter component", () => {

  it("renders correctly", () => {
    const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
      <Counter
        initialValue={1}
        onChange={jest.fn()}
        onIncrement={jest.fn()}
        onDecrement={jest.fn()}
      />,
    );

    expect(testRenderer).toMatchSnapshot("Counter component renders correctly");
  });

  it("renders with label", () => {
    const labelValue = "Contador";
    const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
      <Counter
        initialValue={1}
        label={labelValue}
        onChange={jest.fn()}
        onIncrement={jest.fn()}
        onDecrement={jest.fn()}
      />,
    );

    expect(testRenderer).toMatchSnapshot("Counter component renders with label");
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(InputLabel).props.children).toEqual(labelValue);
  });

  it("should set the correct value when initial is invalid", () => {
    const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
      <Counter
        initialValue={200}
        onChange={jest.fn()}
        onIncrement={jest.fn()}
        onDecrement={jest.fn()}
      />,
    );

    const testRenderer2 : TestRenderer.ReactTestRenderer = TestRenderer.create(
      <Counter
        initialValue={-1}
        onChange={jest.fn()}
        onIncrement={jest.fn()}
        onDecrement={jest.fn()}
      />,
    );

    const testInstance = testRenderer.root;
    const testInstance2 = testRenderer2.root;

    expect(testInstance.findByType(TextField).props.value).toEqual(testInstance.props.maxValue);
    expect(testInstance2.findByType(TextField).props.value).toEqual(testInstance.props.minValue);
  });

  it("should call onIncrement and onDecrement function", () => {
    const decrement = jest.fn();
    const increment = jest.fn();
    const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
      <Counter
        initialValue={200}
        onChange={jest.fn()}
        onIncrement={increment}
        onDecrement={decrement}
      />,
    );

    const testInstance = testRenderer.root;
    const decrementButton = testInstance.findByProps({ id: "decrement-button" });
    const incrementButton = testInstance.findByProps({ id: "increment-button" });

    TestRenderer.act(() => decrementButton.props.onClick());
    TestRenderer.act(() => incrementButton.props.onClick());
    expect(decrement).toHaveBeenCalled();
    expect(increment).toHaveBeenCalled();
  });

  it("should call onChange function", () => {
    const onChange = jest.fn();
    const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
      <Counter
        initialValue={200}
        onChange={onChange}
        onIncrement={jest.fn()}
        onDecrement={jest.fn()}
      />,
    );

    const testInstance = testRenderer.root;
    const input = testInstance.findByType(TextField);

    TestRenderer.act(() => {
      input.props.onChange({ target: { value: 12 } });
    });
    expect(onChange).toHaveBeenCalled();
  });
});

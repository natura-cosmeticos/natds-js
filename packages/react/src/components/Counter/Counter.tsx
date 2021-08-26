import React from "react";
import { CounterProps } from "./Counter.props";
import Label from "../_subcomponents/Label";
import styles from "./Counter.styles";

const Counter = ({
  value = 0,
  onChange,
  onDecrement,
  onIncrement,
  size = "semi",
  label,
  maxValue = 99,
  minValue = 0,
}: CounterProps) => {
  const maxReached = value >= maxValue;
  const minReached = value <= minValue;
  const { buttonBase, inputBase } = styles({ size });

  return (
    <div>
      {label && <Label color={"mediumEmphasis"} label={label} />}
      <div className="container">
        <button id="decrement-button" disabled={minReached} onClick={onDecrement} className={buttonBase}>
          -
        </button>
        <input
          value={value}
          className={inputBase}
          onChange={onChange}
        />
        <button
          id="increment-button"
          disabled={maxReached}
          onClick={onIncrement}
          className={buttonBase}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;

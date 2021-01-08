/* eslint-disable max-lines */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-unused-expressions */
import * as React from "react";
import { ICounterProps } from "./Counter.props";
import { TextField } from "../TextField";
import { useStyles } from "./Counter.styles";
import { ButtonGroup } from "../ButtonGroup";
import { Button } from "../Button";
import { InputLabel } from "../InputLabel";
import { QUANTITY, MAX_VALUE, MIN_VALUE } from "./constants";

export { ICounterProps } from "./Counter.props";

/**
 * ## Importing
 *
 * ```
 * import { Counter } from '@naturacosmeticos/natds-web';
 * ```
 */

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Counter = (props: ICounterProps) => {

  const {
    onChange,
    onDecrement,
    onIncrement,
    size,
    label,
    readOnly,
    initialValue,
    maxValue,
    minValue,
  } = props;

  const { button, input } = useStyles(props);

  const [value, setValue] = React.useState(initialValue);

  // eslint-disable-next-line consistent-return
  React.useEffect(() => {
    if (initialValue > MAX_VALUE) {
      return setValue(MAX_VALUE);
    }
    if (initialValue < MIN_VALUE) {
      return setValue(MIN_VALUE);
    }
  }, [initialValue]);

  const handleInputChange = (event: { target: HTMLInputElement }): void => {
    const newValue = Number(event.target.value);

    if (newValue < minValue || newValue > maxValue) return;
    setValue(newValue);
    onChange && onChange(newValue);
  };

  const increment = () : void => {
    const newValue = value + QUANTITY;

    if (newValue > maxValue) return;
    setValue(newValue);
    onIncrement && onIncrement(newValue);
  };

  const decrement = () : void => {
    const newValue = value - QUANTITY;

    if (newValue < minValue) return;
    setValue(newValue);
    onDecrement && onDecrement(newValue);
  };

  const maxReached = value >= maxValue;
  const minReached = value <= minValue;

  return (
    <div>
      { label && <InputLabel>{ label }</InputLabel> }
      <ButtonGroup
        color="default"
        disableElevation
        size={size}
        orientation="horizontal"
        disabled={readOnly}
      >
        <Button
          id={"decrement-button"}
          disabled={minReached}
          variant="outlined"
          onClick={decrement}
          className={button}>
          -
        </Button>
        <TextField
          color="secondary"
          value={value}
          className={input}
          type="number"
          onChange={handleInputChange}
        />
        <Button
          id={"increment-button"}
          disabled={maxReached}
          variant="outlined"
          onClick={increment}
          className={button}>
          +
        </Button>
      </ButtonGroup>
    </div>
  );
};

Counter.displayName = "Counter";

Counter.defaultProps = {
  readOnly: false,
  size: "small",
  minValue: MIN_VALUE,
  maxValue: MAX_VALUE,
};

export default Counter;

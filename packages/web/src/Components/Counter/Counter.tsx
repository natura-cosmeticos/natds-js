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

export const Counter = React.forwardRef<unknown, ICounterProps>((props: ICounterProps) => {

  const {
    onChange,
    onDecrement,
    onIncrement,
    size,
    label,
    readOnly,
    initialValue,
    maxValue = MAX_VALUE,
    minValue = MIN_VALUE,
  } = props;

  const { button, input } = useStyles(props);

  const [value, setValue] = React.useState(initialValue || QUANTITY);

  // eslint-disable-next-line consistent-return
  React.useEffect(() => {
    if (initialValue > MAX_VALUE) {
      return setValue(MAX_VALUE);
    }
    if (initialValue < MIN_VALUE) {
      return setValue(MIN_VALUE);
    }
  }, [initialValue]);

  const handleInputChange = (event: { target: HTMLInputElement }) => {
    const newValue = Number(event.target.value);

    if (!newValue || (newValue >= minValue && newValue <= maxValue)) {
      setValue(newValue);
      onChange && onChange(newValue);
    }
  };

  const increment = () => {
    const newValue = value + QUANTITY;

    if (newValue <= maxValue) {
      setValue(newValue);
      onIncrement && onIncrement(newValue);
    }
  };

  const decrement = () => {
    const newValue = value - QUANTITY;

    if (newValue >= minValue) {
      setValue(newValue);
      onDecrement && onDecrement(newValue);
    }
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
          disabled={minReached}
          variant="outlined"
          onClick={decrement}
          className={button}>
          -
        </Button>
        <TextField
          value={value}
          className={input}
          type="number"
          onChange={handleInputChange}
        />
        <Button
          disabled={maxReached}
          variant="outlined"
          onClick={increment}
          className={button}>
          +
        </Button>
      </ButtonGroup>
    </div>
  );
});

Counter.displayName = "Counter";

Counter.defaultProps = {
  readOnly: false,
  size: "small",
  minValue: MIN_VALUE,
  maxValue: MAX_VALUE,
};

export default Counter;

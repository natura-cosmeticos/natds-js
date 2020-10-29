import { Story } from "@storybook/react";
import * as React from "react";
import { ILinearProgressProps } from "./LinearProgress.props";
import { LinearProgress } from "./LinearProgress";
import { argTypes } from "./LinearProgress.argTypes";

export const Template : Story<ILinearProgressProps> = (args: ILinearProgressProps) => <LinearProgress {...args} />;

export const DynamicTemplate : Story<ILinearProgressProps> = (args: ILinearProgressProps) => {

  const [value, setValue] = React.useState<ILinearProgressProps["value"]>(args.value);
  const [valueBuffer, setValueBuffer] = React.useState<ILinearProgressProps["valueBuffer"]>(args.valueBuffer);

  const progress = React.useRef(() => {
    Function.prototype();
  });

  React.useEffect(() => {

    progress.current = () => {
      const { max, min } = argTypes.value.control;
      const diffFactor = 10;

      if (value >= max) {
        setValue(min);
        setValueBuffer(diffFactor);
      } else {
        const valueDiff = Math.random() * diffFactor;
        const valueBufferDiff = Math.random() * diffFactor;

        setValue(value + valueDiff);
        setValueBuffer(valueBuffer + valueBufferDiff);
      }
    };
  });

  React.useEffect(() => {
    const tick = () => {
      progress.current();
    };
    const timeout = 500;
    const timer = setInterval(tick, timeout);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <LinearProgress {...args} value={value} valueBuffer={valueBuffer} />;

};

export default Template;

/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-empty-function */
import * as React from "react";
import { MaskedInputProps } from "react-text-mask";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const mock = (props: MaskedInputProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { render, ...otherProps } = props,
    setRef = () => {
    };

  let result = <input {...otherProps} />;

  if (props.render) {
    result = props.render(setRef, { ...otherProps });
  }

  return result;
};

export default mock;

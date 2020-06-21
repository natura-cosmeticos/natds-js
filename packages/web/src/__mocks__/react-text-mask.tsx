import * as React from 'react';
import { MaskedInputProps } from 'react-text-mask';

const mock = (props: MaskedInputProps) => {
  const { render, ...otherProps } = props;

  const setRef = () => {
    return;
  };

  return props.render ?
    props.render(setRef, { ...otherProps }) :
    <input {...otherProps} />;
};

export default mock;

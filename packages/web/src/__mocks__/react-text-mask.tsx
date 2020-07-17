import * as React from 'react';
import { MaskedInputProps } from 'react-text-mask';

const mock = (props: MaskedInputProps) => {
  const { render, ...otherProps } = props,

    /* tslint:disable-next-line:no-empty */
    setRef = () => {

    };

  let result = <input {...otherProps} />;

  if (props.render) {
    result = props.render(setRef, { ...otherProps });
  }

  return result;
};

export default mock;

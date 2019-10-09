import React, { FunctionComponent, useState } from 'react';

export interface IProps {
  labelOn: string;
  labelOff: string;
};

export const Chip: FunctionComponent<IProps> = (props: IProps) => {
  const [isOn, toggleCheck] = useState(false);

  return (
    <label>
      <input
        type="checkbox"
        checked={isOn}
        onChange={() => toggleCheck(!isOn)}
      />
      {isOn ? props.labelOn : props.labelOff}
    </label>
  );
};

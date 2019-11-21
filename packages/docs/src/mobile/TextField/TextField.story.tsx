import * as React from 'react';
import { TextField } from '@naturacosmeticos/natds-rn';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { text, boolean, select } from '@storybook/addon-knobs';

import './style.scss';

export default {
  title: 'Mobile|TextField',
  component: TextField,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'mobile',
    jest: ['TextField'],
    theme: 'mobile',
  },
};

const status: any = {
  undefined,
  success: 'success',
  error: 'error'
};

const icon: any = {
  undefined,
  eye: 'eye',
  'close-circle': 'close-circle'
};

export const Interactive = () => {
  return (
    <div className="mobile__text__field__container">
      <TextField
        label={text("label", "Label")}
        helpText={text("helpText", "Help text")}
        placeholder={text("placeholder", "Placeholder")}
        required={boolean("required", false)}
        editable={boolean("editable", true)}
        status={select("status", status, undefined)}
        icon={select("icon", icon, undefined)}
      />
    </div>
  );
};

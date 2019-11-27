import * as React from 'react';
import { TextField } from '@naturacosmeticos/natds-rn';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { text, boolean, select, number } from '@storybook/addon-knobs';

import './style.scss';

import TextFieldDocs from "./TextField.mdx";

export default {
  title: 'Mobile|TextField',
  component: TextField,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'mobile',
    jest: ['TextField'],
    theme: 'mobile',
    docs: {
      page: TextFieldDocs
    }
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

const types: any = {
  password: 'password',
  search: 'search',
  text: 'text',
  other: 'other'
};

export const Interactive = () => {
  return (
    <div className="mobile__text__field__container">
      <TextField
        label={text("label", "Label")}
        helpText={text("helpText", "Help Text")}
        placeholder={text("placeholder", "Placeholder")}
        required={boolean("required", false)}
        editable={boolean("editable", true)}
        status={select("status", status, undefined)}
        icon={select("icon", icon, undefined)}
        type={select("type", types, types.text)}
        multiline={boolean("multiline", false)}
        numberOfLines={number("numberOfLines", 1)}
      />
    </div>
  );
};

export const Status = () => {
  return (
    <div className="mobile__text__field__wrapper">
      <div className="mobile__text__field__container">
        <TextField
          label="Label"
          helpText="Help Text"
          placeholder="Placeholder"
          status="success"
          icon="eye"
        />
      </div>
      <div className="mobile__text__field__container">
        <TextField
          label="Label"
          helpText="Help Text"
          placeholder="Placeholder"
          status="error"
          icon="eye"
        />
      </div>
    </div>
  );
};

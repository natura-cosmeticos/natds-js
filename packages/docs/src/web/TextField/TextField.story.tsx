import * as React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { Delete } from '@material-ui/icons';
import { TextField } from '@naturacosmeticos/natds-web';

import TextFieldDocs from './TextField.docs.mdx';

export default {
  title: 'Web|TextField',
  component: TextField,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['TextField'],
    theme: 'web',
    docs: {
      page: TextFieldDocs
    }
  }
};

const types: any = {
  text: 'text',
  password: 'password',
  search: 'search',
  email: 'email',
};

const status: any = {
  success: 'success',
  error: 'error',
  default: undefined
};

export const Interactive = () => (
  <TextField
    style={{ flex: '1 1 auto', width: '328px' }}
    label={text('label', 'Label')}
    defaultValue={text('value', 'XD')}
    placeholder={text('placeholder', 'XD')}
    helpText={text('helpText', 'Assistive text')}
    type={select('type', types, types.text)}
    status={select('status', status, status.text)}
    required={boolean('required', false)}
    disabled={boolean('disabled', false)}
    multiline={boolean('multiline', false)}
  />
);

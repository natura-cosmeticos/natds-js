import { ArgType } from '@storybook/addons';
import { ISelectProps } from './Select.props';
import { booleanArgType } from '../../../.storybook/argTypes/booleanArgType';
import { textArgType } from '../../../.storybook/argTypes/textArgType';

export const argTypes: Record<keyof ISelectProps, ArgType> = {
  disabled: {
    ...booleanArgType,
    description: 'Disables the `select` for user interactions.',
    table: {
      ...booleanArgType.table,
      defaultValue: { summary: false },
    },
  },
  helpText: {
    ...textArgType,
    description: 'The text below the `select` element.',
  },
  id: {
    ...textArgType,
    description:
      'The `id` of the wrapper element or the `select` element when `native`.',
  },
  label: {
    ...textArgType,
    description:
      'Label is the text used above the Select element. It describes the field name.',
  },
  onChange: {
    defaultValue: null,
    type: "function",
  },
  options: {
    control: { type: 'array' },
    description: 'All options of Select',
    table: {
      defaultValue: { summary: '[one, two, three]' },
      type: { summary: 'array' },
    },
  },
  placeholder: {
    ...textArgType,
    description: '',
  },
  required: {
    ...booleanArgType,
    description: 'Whether the select is required or not.',
    table: {
      ...booleanArgType.table,
      defaultValue: { summary: false },
    },
  },
  state: {
    control: { options: ['success', 'error'], type: 'inline-radio' },
    description: 'Sets whether the `input` is in `error` or `success` state.',
    table: { type: { summary: '"success" | "error" | undefined' } },
  },
};

export default argTypes;

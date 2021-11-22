import { ArgType } from '@storybook/addons'
import { ITextFieldProps } from './TextField.props'
import { booleanArgType } from '../../../.storybook/argTypes/booleanArgType'
import { types } from './__fixtures__/types'
import { states } from './__fixtures__/states'
import { sizes } from './__fixtures__/sizes'
import { textArgType } from '../../../.storybook/argTypes/textArgType'

const componentArgType = {
  table: { type: { summary: 'React.ComponentType' } }
}

export const argTypes: Record<keyof ITextFieldProps, ArgType> = {
  disabled: {
    ...booleanArgType,
    description: 'Disables the `input` for user interactions.',
    table: {
      ...booleanArgType.table,
      defaultValue: { summary: false }
    }
  },
  helpText: {
    ...textArgType,
    description: 'The text below the `input` element.'
  },
  hidePasswordIcon: {
    ...componentArgType,
    description: 'Hide icon for password type.'
  },
  icon: {
    ...componentArgType,
    description: 'Custom icon component'
  },
  id: {
    ...textArgType,
    description: 'Is applied to the `input` element and used in the `label` `htmlFor` property.'
  },
  label: {
    ...textArgType,
    description: 'Label is the text used above the Input element. It describes the field name.'
  },
  mask: {
    description: `
Mask format to use. Does not work with multiline mode.

Check [Text Mask API](https://github.com/text-mask/text-mask) for more info.
`,
    table: { type: { summary: 'array | function' } }
  },
  multiline: {
    ...booleanArgType,
    description: `
Transform \`TextField\` into a \`textarea\`.

Props like \`rows\` and \`cols\` will be forwarded to the textarea.
`,
    table: {
      ...booleanArgType.table,
      defaultValue: { summary: false }
    }
  },
  onIconPress: {
    description: 'Optional callback for custom icon.',
    table: { type: { summary: 'function' } },
    type: { required: false }
  },
  placeholder: {
    ...textArgType,
    description: 'Text to display when the input is empty.'
  },
  required: {
    ...booleanArgType,
    description: 'Whether the field is required or not.',
    table: {
      ...booleanArgType.table,
      defaultValue: { summary: false }
    }
  },
  searchIcon: {
    ...componentArgType,
    description: 'Custom icon for `search` `type`.'
  },
  showPasswordIcon: {
    ...componentArgType,
    description: 'Show icon for `password` `type`.'
  },
  size: {
    control: { options: sizes, type: 'inline-radio' },
    description: 'Sets the height of Input field',
    defaultValue: 'mediumX'
  },
  state: {
    control: { options: states, type: 'inline-radio' },
    description: 'Sets whether the `input` is in `error` or `success` state.',
    table: { type: { summary: '"success" | "error" | undefined' } }
  },
  type: {
    control: { options: types, type: 'inline-radio' },
    description: `
Creates custom functionalities for \`password\` and \`search\` input types.

Other types will be forwarded to the input.
`,
    table: { type: { summary: '"password" | "search" | "text" | string' } }
  },
  onClearSearch: {
    description: 'Event to clear input field on "search" type'
  },
  onBlur: {
    description: 'Callback fired when the input is blurred.'
  },
  onChange: {
    description: 'Callback fired when the value is changed.'
  },
  onFocus: {
    description: 'Callback fired when the value is focused.'
  },
  value: {
    ...textArgType,
    description: 'The value of the `input` element, required for a controlled component.'
  }
}

export default argTypes

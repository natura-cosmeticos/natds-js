import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Rating, RatingProps } from '.'

const componentStatus = `
---

**NOTE FOR UXs**: This component is available in the following variants:

  - ✅ \`counter\`
  - ❌ \`input\`
  - ✅ \`read-only\`

With the following attribute status:

- ✅ **Label** (only for Input and Counter variant)
- ✅ **Disabled** (only for Input variant)
- ✅ **Rate** (only for Read-Only variant)
- **Size**
    - ✅ \`small\` (only for Read-Only and Counter variants)
    - ✅ \`standard\`
    - ✅ \`semi\`
    - ✅ \`semiX\`
    - ✅ \`medium\` (only for Input variant)
- **Align** (only for Counter variant)
    - ✅ \`left\`
    - ✅ \`right\`

---
`

export default {
  title: 'Components/Rating',
  component: Rating,
  parameters: {
    componentSubtitle: 'Provides a user interactive stars for rating or checking something’s rating.',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta

export const Playground: Story<RatingProps> = (args) => <Rating {...args} />
Playground.args = {
  variant: 'counter'
}

export const Input: Story<RatingProps> = Playground.bind({})
Input.parameters = { controls: { exclude: ['align'] } }
Input.argTypes = {
  align: { defaultValue: 'bottom', options: ['bottom'] },
  rate: { defaultValue: 0, options: [0, 1, 2, 3, 4, 5], control: 'inline-radio' },
  size: { defaultValue: 'semi', options: ['semi', 'semiX', 'medium'] },
  variant: { defaultValue: 'input', options: ['input'] },
  disabled: { defaultValue: false }
}

export const ReadOnly: Story<RatingProps> = Playground.bind({})
ReadOnly.parameters = { controls: { exclude: ['align', 'label', 'disabled'] } }
ReadOnly.argTypes = {
  rate: { defaultValue: 0, options: [0, 1, 2, 3, 4, 5], control: 'inline-radio' },
  size: { defaultValue: 'small', options: ['small', 'standard', 'semi', 'semiX'] },
  variant: { defaultValue: 'read-only', options: ['read-only'] }
}

export const Counter: Story<RatingProps> = Playground.bind({})
Counter.parameters = { controls: { exclude: ['rate', 'disabled'] } }
Counter.argTypes = {
  align: { defaultValue: 'left', options: ['left', 'right'] },
  label: { defaultValue: 'Placeholder' },
  size: { defaultValue: 'small', options: ['small', 'standard', 'semi', 'semiX'] },
  variant: { defaultValue: 'counter', options: ['counter'] }
}

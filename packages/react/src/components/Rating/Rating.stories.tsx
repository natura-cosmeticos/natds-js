/* eslint-disable max-len */
import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { Rating } from '.'
import {
  RatingCounterProps, RatingInputProps, RatingProps, RatingReadOnlyProps
} from './Rating.props'

const componentStatus = `
---

**NOTE FOR UXs**: This component is available in the following variants:

  - ✅ \`counter\`
  - ✅ \`input\`
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

export const Playground: Story<RatingProps> = (args: RatingProps) => <Rating {...args} />
Playground.args = {
  variant: 'counter',
  label: 'Placeholder',
  size: 'semi'
}

export const Input: Story<RatingInputProps> = ({ rate, ...args }: RatingInputProps) => {
  const [rating, setRating] = useState(rate)

  return (
    <Rating {...args} rate={rating} onClick={(e) => setRating(e.target.value)} />
  )
}
Input.args = {
  rate: 2,
  variant: 'input',
  disabled: false,
  size: 'semi'
}

Input.parameters = { controls: { exclude: ['align'] } }

export const ReadOnly: Story<RatingReadOnlyProps> = (args: RatingReadOnlyProps) => <Rating {...args} />
ReadOnly.parameters = { controls: { exclude: ['align', 'label', 'disabled'] } }
ReadOnly.args = {
  rate: 2,
  size: 'semi',
  variant: 'read-only'
}

export const Counter: Story<RatingCounterProps> = (args: RatingCounterProps) => <Rating {...args} />
Counter.parameters = { controls: { exclude: ['rate', 'disabled'] } }
Counter.args = {
  align: 'left',
  label: 'Placeholder',
  size: 'semi',
  variant: 'counter'
}

/* eslint-disable max-len */
import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { Rating } from '.'
import {
  RatingCounterProps, RatingInputProps, RatingProps, RatingReadOnlyProps
} from './Rating.props'

const componentStatus = `
> Provides a user interactive stars for rating or checking something’s rating.

## Properties
| Property                      | Values                                        |    Status           |
|---                            |                                            ---|                  ---|
| **variant**                   | counter, input, read-only                     | ✅ Available        |
| **ariaLabel**                 | string                                        | ✅ Available        |
| **ariaLabelGroup**            | string                                        | ✅ Available        |
| **align**                     | left, right (only for Counter variant)        | ✅ Available        |
| **label**                     | string (only for Input and Counter variant)   | ✅ Available        |
| **size**                      | small:(Read-Only and Counter variants), <br /> standard, semi, semiX, <br />medium:(only for Input variant)  | ✅ Available        |
| **disabled**                  | true/false  (only for Input variant)          | ✅ Available        |
| **onClick**                   | function                                      | ✅ Available        |
| **rate**                      | 0 \\| 1 \\| 2 \\| 3 \\| 4 \\| 5  (only for Read-Only variant)                                     | ✅ Available        |
| **brand**                     | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |

## Technical Usages Examples
`

export default {
  title: 'Components/Rating',
  component: Rating,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta

export const Playground: Story<RatingProps> = (args: RatingProps) => <Rating {...args} />
Playground.args = {
  variant: 'counter',
  label: 'Placeholder',
  size: 'semi',
  ariaLabel: 'rating star'
}

export const Input: Story<RatingInputProps> = ({ rate, ...args }) => {
  const [rating, setRating] = useState(rate)

  return (
    <Rating {...args} rate={rating} onClick={(e) => setRating(e.target.value)} />
  )
}
Input.args = {
  ariaLabel: 'rating star',
  disabled: false,
  rate: 2,
  size: 'semi',
  variant: 'input',
  ariaLabelGroup: 'rating star group'
}

Input.parameters = { controls: { exclude: ['align', 'rate'] } }

export const ReadOnly: Story<RatingReadOnlyProps> = (args: RatingReadOnlyProps) => <Rating {...args} />
ReadOnly.parameters = { controls: { exclude: ['align', 'label', 'disabled'] } }
ReadOnly.args = {
  ariaLabel: 'rating star',
  rate: 2,
  size: 'semi',
  variant: 'read-only',
  ariaLabelGroup: 'rating star group'
}

export const Counter: Story<RatingCounterProps> = (args: RatingCounterProps) => <Rating {...args} />
Counter.parameters = { controls: { exclude: ['rate', 'disabled'] } }
Counter.args = {
  align: 'left',
  ariaLabel: 'rating star',
  label: 'Placeholder',
  size: 'semi',
  variant: 'counter'
}

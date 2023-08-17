/* eslint-disable max-len */
import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Counter, CounterProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `
---

**NOTE FOR UXs**: This component is available in the following variants:

  - ✅ \`standard\`

With the following attribute status:

- ✅ **Label**
- **Size**
    - ✅ \`semiX\`
    - ✅ \`medium\`
- ✅ **Disabled**
- ✅ **onChange**
    - ✅ \`function\`
- ✅ **readOnly**
    - ✅ \`true\`
    - ✅ \`false\`

---
`

export default {
  title: 'Components/Counter',
  component: Counter,
  parameters: {
    componentSubtitle: 'Reduce input effort for fields with values that deviate little from the default by allowing users to increase or decrease the number in a single button press.',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta

export const Playground: Story<CounterProps> = ({ value, ...args }) => {
  const [amount, setAmount] = React.useState<number>(value || 0)

  const handleIncrement = () => setAmount(amount + 1)
  const handleDecrement = () => setAmount(amount - 1)
  const handleNumber = (e: string) => {
    const number = e.replace(/[^\d]/g, '')
    return Number(number)
  }
  return (
    <div>
      <Counter
        {...args}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        value={amount}
        onChange={(e) => setAmount(handleNumber(e.target.value))}
      />
    </div>
  )
}

Playground.args = { value: 0, label: 'label', readOnly: false }

export const Sizes: Story<CounterProps> = (args) => {
  const [counter1, setCounter1] = React.useState(0)
  const [counter2, setCounter2] = React.useState(0)
  return (
    <StoryContainer>
      <Counter
        {...args}
        value={counter1}
        onIncrement={() => setCounter1(counter1 + 1)}
        onDecrement={() => setCounter1(counter1 - 1)}
      />
      <Counter
        {...args}
        size="medium"
        value={counter2}
        onIncrement={() => setCounter2(counter2 + 1)}
        onDecrement={() => setCounter2(counter2 - 1)}
      />
    </StoryContainer>
  )
}

export const Disabled: Story<CounterProps> = (args) => <Counter {...args} />
Disabled.args = { disabled: true }

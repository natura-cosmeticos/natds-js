import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Counter, CounterProps } from '.'

const componentStatus = `
---

**NOTE FOR UXs**: This component is available in the following variants:

  - ❌ \`standard\`

With the following attribute status:

- ❌ **Label**
- ❌ **Size**
- ❌ **Disabled**

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

export const Playground: Story<CounterProps> = (args) => <Counter {...args} />

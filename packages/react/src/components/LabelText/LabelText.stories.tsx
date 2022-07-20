import React from 'react'
import { Story, Meta } from '@storybook/react'
import { LabelText, LabelTextProps } from '.'

const componentStatus = `
- - -

**NOTE FOR UXs**: This component is available in the following variants:

  - ❌ Standard

With the following attribute statuses:

  - **Attributes:**
    - ❌ \`Types\`

- - -
`

export default {
  title: 'Components/LabelText',
  component: LabelText,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<LabelTextProps> = (args) => (
  <LabelText {...args}>Meu primeiro componente no DS</LabelText>
)

export const WithError: Story<LabelTextProps> = (args) => (
  <LabelText {...args} hasError>Meu primeiro componente no DS</LabelText>
)

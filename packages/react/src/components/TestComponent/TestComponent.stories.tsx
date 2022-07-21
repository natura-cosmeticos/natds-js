import React from 'react'
import { Story, Meta } from '@storybook/react'
import { TestComponent, TestComponentProps } from '.'

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
  title: 'Components/TestComponent',
  component: TestComponent,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<TestComponentProps> = (args) => (
  <TestComponent {...args}>Meu primeiro componente</TestComponent>
)

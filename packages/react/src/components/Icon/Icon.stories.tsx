import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Icon, IconProps } from '.'

const componentStatus = `
---

**NOTE**: This component is available with the following attribute status:

- ✅ **Color**
    - Support Color tokens from theme
- ✅  **Size**
    - Support Size tokens from theme
- ✅  **Name**
    - Check all Icon names in [Icon Library](https://ds.natura.design/28db352be/p/94367e-icon-library/b/6154b9)

---
`

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    componentSubtitle: 'A helper component to display icons from @naturacosmeticos/natds-icons package',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<IconProps> = (args) => <Icon {...args} />

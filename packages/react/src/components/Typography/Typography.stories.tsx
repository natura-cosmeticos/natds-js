import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Typography, TypographyProps } from '.'

const componentStatus = `
- - -

The component of Text is rendered inside a DIV. This happen because the component has dynamic behavior depending of variant value.

- - -

**NOTE FOR UXs**: This component is available in the following variants:

  - ✅ Heading1
  - ✅ Heading2
  - ✅ Heading3
  - ✅ Heading4
  - ✅ Heading5
  - ✅ Heading6
  - ✅ Subtitle1
  - ✅ Subtitle2
  - ✅ Subtitle2
  - ✅ Body1
  - ✅ Body2
  - ✅ Caption
  - ✅ Overline

- - -
`

export default {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<TypographyProps> = (args) => (
  <Typography {...args}>Hello world</Typography>
)

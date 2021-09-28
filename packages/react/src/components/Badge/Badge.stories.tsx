import React from 'react'
import { Story, Meta } from '@storybook/react'
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { Badge, BadgeProps } from '.'

const componentStatus = `
---

**NOTE FOR UXs**: This component is available in the following variants:

  - ✅ \`dot\`
  - ✅ \`pulse\`
  - ✅ \`standard\`

With the following attribute status:

- ✅ **Motion** (only available for Pulse variant)
- ✅ **Limit** (only available for Standard variant)
- **Color**
    - ✅ \`alert\`
    - ✅ \`primary\`
    - ✅ \`secondary\`
    - ✅ \`success\`

---
`

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    componentSubtitle: 'The badge is used to notify the user',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta

const styles = createUseStyles((theme: Theme) => ({
  container: {
    position: 'relative',
    height: theme.size.standard,
    width: theme.size.standard,
    backgroundColor: theme.color.lowEmphasis
  },
  badge: {
    position: 'absolute',
    left: 18,
    bottom: 18
  }
}))

export const Playground: Story<BadgeProps> = (args) => {
  const { badge, container } = styles()

  return (
    <div className={container}>
      <Badge {...args} className={badge} />
    </div>
  )
}
Playground.args = {
  variant: 'dot',
  ariaLabel: 'notifications'
}

export const Variants: Story<BadgeProps> = (args) => (
  <div style={{ display: 'flex', gap: 8 }}>
    <Badge {...args} variant="dot" />
    <Badge {...args} variant="pulse" />
    <Badge {...args} variant="standard" value={99} />
  </div>
)
Variants.args = { ...Playground.args }

export const Colors: Story<BadgeProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <div style={{ display: 'flex', gap: 8 }}>
      <Badge {...args} variant="dot" />
      <Badge {...args} variant="dot" color="primary" />
      <Badge {...args} variant="dot" color="secondary" />
      <Badge {...args} variant="dot" color="success" />
    </div>
    <div style={{ display: 'flex', gap: 8 }}>
      <Badge {...args} variant="pulse" />
      <Badge {...args} variant="pulse" color="primary" />
      <Badge {...args} variant="pulse" color="secondary" />
      <Badge {...args} variant="pulse" color="success" />
    </div>
    <div style={{ display: 'flex', gap: 8 }}>
      <Badge {...args} variant="standard" value={99} />
      <Badge {...args} variant="standard" value={99} color="primary" />
      <Badge {...args} variant="standard" value={99} color="secondary" />
      <Badge {...args} variant="standard" value={99} color="success" />
    </div>
  </div>
)
Colors.args = { ...Playground.args }

export const Limit: Story<BadgeProps> = (args) => (
  <div style={{ display: 'flex', gap: 8 }}>
    <Badge {...args} variant="standard" value={99} />
    <Badge {...args} variant="standard" value={99} limit={99} />
  </div>
)
Limit.args = { ...Playground.args }

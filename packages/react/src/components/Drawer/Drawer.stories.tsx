/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { IconName } from '@naturacosmeticos/natds-icons'
import { Drawer, DrawerProps } from '.'
import IconButton from '../IconButton'
import Button from '../Button'
import Icon from '../Icon'
import Avatar from '../Avatar'
import { Divider } from '../Divider'
import { ListItem } from '../ListItem'
import { Badge } from '../Badge'

const componentStatus = `
---

**NOTE FOR UX**: This component is available in the following variants:

  - ❌ \`base\`
  - ❌ \`standard\`

With the following attribute status:

  - **Position**
      - ✅ \`left\`
      - ❌ \`right\`
      - ❌ \`bottom\`
      - ❌ \`top\`
  - **Size**
      - ✅ \`small\`
      - ❌ \`medium\`
      - ❌ \`large\`
---
`

export default {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    componentSubtitle: 'A Drawer is a thin line that groups content in lists and layouts',
    docs: { description: { component: componentStatus } }
  }
} as Meta

const bodyMenu = [
  {
    name: 'Favorites',
    icon: 'outlined-action-love',
    new: false
  },
  {
    name: 'Coupons',
    icon: 'outlined-finance-discount',
    new: true
  },
  {
    name: 'Orders',
    icon: 'outlined-action-request',
    new: false
  }
]

const footerMenu = [
  {
    name: 'Sign Out',
    icon: 'outlined-navigation-exit',
    new: false
  },
  {
    name: 'Help',
    icon: 'outlined-action-help',
    new: false
  },
  {
    name: 'Privacy Policy',
    icon: 'outlined-social-person',
    new: false
  }
]

export const Playground: Story<DrawerProps> = (args) => {
  const [showDrawer, setShowDrawer] = useState(true)

  return (
    <>
      <Button onClick={() => setShowDrawer(!showDrawer)}>Open Drawer</Button>
      <Drawer {...args} open={showDrawer}>
        <header>
          <div style={{ padding: 8 }}>
            <Avatar type="image" src="https://pbs.twimg.com/profile_images/1493260750386835462/Z13XvXbo_400x400.jpg" />
            <h6 style={{ fontSize: 20, margin: '16px 0' }}>Hello, Natura Design System</h6>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: 8,
            position: 'absolute',
            top: 0,
            right: 0
          }}
          >
            <IconButton
              onClick={() => setShowDrawer(!showDrawer)}
              ariaLabel="close drawer"
              IconComponent={<Icon name="outlined-navigation-close" />}
            />
          </div>
        </header>
        <div>
          <Divider />
          {bodyMenu.map((item, id) => (
            <ListItem key={id} interaction="action">
              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <Icon name={item.icon as IconName} color="highEmphasis" />
                <span style={{
                  fontSize: 16, color: '#333333', display: 'flex', gap: 4
                }}
                >
                  {item.name}
                  {item.new && <Badge variant="dot" />}
                </span>
              </div>
            </ListItem>
          ))}
        </div>
        <footer style={{ position: 'absolute', bottom: 0, width: '100%' }}>
          <Divider />
          {footerMenu.map((item, id) => (
            <ListItem key={id} interaction="action">
              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <Icon name={item.icon as IconName} color="highEmphasis" />
                <span style={{
                  fontSize: 16, color: '#333333', display: 'flex', gap: 4
                }}
                >
                  {item.name}
                  {item.new && <Badge variant="pulse" />}
                </span>
              </div>
            </ListItem>
          ))}
        </footer>
      </Drawer>
    </>
  )
}

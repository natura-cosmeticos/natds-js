/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { IconName } from '@naturacosmeticos/natds-icons'
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { Drawer, DrawerProps } from '.'
import { IconButton } from '../IconButton'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { Avatar } from '../Avatar'
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
      - ✅ \`medium\`
      - ✅ \`large\`
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

const items = {
  header: [
    {
      name: 'Favorites',
      icon: 'outlined-action-love',
      new: false
    },
    {
      name: 'Invite & Earn',
      icon: 'outlined-social-groupofpeople',
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
  ],
  body: [
    {
      name: 'Gifts',
      icon: 'outlined-content-gift',
      new: false
    },
    {
      name: 'Perfumery',
      icon: 'outlined-product-perfumery',
      new: false
    },
    {
      name: 'Body',
      icon: 'outlined-product-dailycare',
      new: false
    },
    {
      name: 'Hair',
      icon: 'outlined-product-hair',
      new: false
    },
    {
      name: 'Make Up',
      icon: 'outlined-product-makeup',
      new: false
    },
    {
      name: 'Sales',
      icon: 'outlined-product-promotionproduct',
      new: false
    }
  ],
  footer: [
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
}

const styles = createUseStyles((theme: Theme) => ({
  headerTitle: {
    fontFamily: [
      theme.navigationDrawer.header.title.primary.fontFamily,
      theme.navigationDrawer.header.title.fallback.fontFamily
    ],
    fontWeight: [
      theme.navigationDrawer.header.title.primary.fontWeight,
      theme.navigationDrawer.header.title.fallback.fontWeight
    ],
    fontSize: theme.navigationDrawer.header.title.fontSize,
    letterSpacing: theme.navigationDrawer.header.title.letterSpacing,
    lineHeight: theme.navigationDrawer.header.title.lineHeight,
    margin: [16, 0]
  },
  sectionItem: {
    fontFamily: [
      theme.navigationDrawer.section.item.primary.fontFamily,
      theme.navigationDrawer.section.item.fallback.fontFamily
    ],
    fontWeight: [
      theme.navigationDrawer.section.item.primary.fontWeight,
      theme.navigationDrawer.section.item.fallback.fontWeight
    ],
    fontSize: theme.navigationDrawer.section.item.fontSize,
    letterSpacing: theme.navigationDrawer.section.item.letterSpacing,
    lineHeight: theme.navigationDrawer.section.item.lineHeight,
    display: 'flex',
    gap: theme.spacing.micro
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  headerButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 8,
    position: 'absolute',
    top: 0,
    right: 0
  }
}))

export const Playground: Story<DrawerProps> = (args) => {
  const [showDrawer, setShowDrawer] = useState(true)
  const {
    headerTitle, headerButton, sectionItem, footer
  } = styles()

  return (
    <>
      <Button onClick={() => setShowDrawer(!showDrawer)}>Open Drawer</Button>
      <Drawer {...args} open={showDrawer}>
        <header>
          <div style={{ padding: 8 }}>
            <Avatar type="image" src="https://pbs.twimg.com/profile_images/1493260750386835462/Z13XvXbo_400x400.jpg" alt="avatar" />
            <h6 className={headerTitle}>Hello, Design System</h6>
          </div>
          <div className={headerButton}>
            <IconButton
              onClick={() => setShowDrawer(!showDrawer)}
              ariaLabel="close drawer"
              IconComponent={<Icon name="outlined-navigation-close" />}
            />
          </div>
        </header>
        <div>
          <Divider />
          <ul style={{ padding: 0, margin: 0 }}>
            {items.header.map((item, id) => (
              <ListItem key={id} interaction="action">
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <Icon name={item.icon as IconName} />
                  <span className={sectionItem}>
                    {item.name}
                    {item.new && <Badge variant="pulse" />}
                  </span>
                </div>
              </ListItem>
            ))}
          </ul>
          <Divider />
          <ul style={{ padding: 0, margin: 0 }}>
            {items.body.map((item, id) => (
              <ListItem key={id} interaction="action">
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <Icon name={item.icon as IconName} />
                  <span className={sectionItem}>
                    {item.name}
                    {item.new && <Badge variant="pulse" />}
                  </span>
                </div>
              </ListItem>
            ))}
          </ul>
        </div>
        <footer className={footer}>
          <Divider />
          <ul style={{ padding: 0, margin: 0 }}>
            {items.footer.map((item, id) => (
              <ListItem key={id} interaction="action">
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <Icon name={item.icon as IconName} />
                  <span className={sectionItem}>
                    {item.name}
                    {item.new && <Badge variant="pulse" />}
                  </span>
                </div>
              </ListItem>
            ))}
          </ul>
        </footer>
      </Drawer>
    </>
  )
}

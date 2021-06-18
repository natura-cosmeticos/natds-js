import React from 'react'
import { Story, Meta } from '@storybook/react'
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { Card, CardProps } from '.'
import { Button } from '../Button'
import { Icon } from '../Icon'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `
---

**NOTE**: This component is available in the following attributes:

  - ✅ \`elevation\`
  - ✅ \`radius\`

---
`

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    componentSubtitle: 'Cards are surfaces that groups content and actions in the same space. Its construction must always create a visual hierarchy of the content and communicate its purposes',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<CardProps> = (args) => {
  const { image, wrapper } = containerStyles()
  const { text } = textStyle()

  return (
    <Card {...args}>
      <div className={image}>
        <Icon name="outlined-product-brandsproduct" size="hugeXXX" />
      </div>
      <div className={wrapper}>
        <p className={text}>
          This is just an example of the Card component
          containing an image, a text and a button
        </p>
        <Button text="button" onClick={() => ''} iconName="filled-action-add" fullWidth />
      </div>
    </Card>
  )
}

export const Elevation: Story<CardProps> = (args) => {
  const { text } = textStyle()

  return (
    <StoryContainer>
      <Card {...args}>
        <p className={text}>
          This is an example of the Card component with elevation
        </p>
      </Card>
      <Card {...args} elevation={false}>
        <p className={text}>
          This is an example of the Card component without elevation
        </p>
      </Card>
    </StoryContainer>
  )
}

export const Radius: Story<CardProps> = (args) => {
  const { text } = textStyle()

  return (
    <StoryContainer>
      <Card {...args}>
        <p className={text}>
          This is an example of the Card component with radius
        </p>
      </Card>
      <Card {...args} radius={false}>
        <p className={text}>
          This is an example of the Card component without radius
        </p>
      </Card>
    </StoryContainer>
  )
}

const textStyle = createUseStyles((theme: Theme) => ({
  text: {
    color: theme.color.highEmphasis,
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    fontSize: 14,
    fontWeight: 'normal',
    letterSpacing: 0.22,
    maxWidth: 168,
    textAlign: 'center'
  }
}))

const containerStyles = createUseStyles((theme: Theme) => ({
  image: {
    backgroundColor: theme.color.lowEmphasis,
    opacity: 0.4,
    textAlign: 'center'
  },
  wrapper: {
    padding: theme.spacing.small
  }
}))

import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { useTheme } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { Collapse, CollapseProps } from '.'
import Button from '../Button'

export default {
  title: 'Utilities/Collapse',
  component: Collapse
} as Meta

export const Playground: Story<CollapseProps> = (args) => {
  const theme: Theme = useTheme()
  const [opened, setOpened] = useState(false)
  const text = opened ? 'hide content' : 'show content'

  return (
    <>
      <Button onClick={() => setOpened(!opened)}>{text}</Button>
      <Collapse {...args} open={opened}>
        <p style={{
          color: theme.color.onSurface,
          fontFamily: theme.typography.fontFamily.primary
        }}
        >
          some content
        </p>
      </Collapse>
    </>
  )
}

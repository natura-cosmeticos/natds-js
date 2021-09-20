import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Theme } from '@naturacosmeticos/natds-themes'
import { useTheme } from 'react-jss'

export default {
  title: 'Components/Typography',
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true
      }
    }
  }
} as Meta

export const CustomFonts: Story = () => {
  const theme: Theme = useTheme()

  return (
    <>
      <h2 style={{
        fontFamily: `"${theme.typography.headline.fontFamily}", ${theme.typography.fallback.fontFamily}`,
        fontWeight: theme.typography.headline.fontWeight,
        color: theme.color.highlight
      }}
      >
        Headline
      </h2>
      <h2 style={{
        fontFamily: `"${theme.typography.display.fontFamily}", ${theme.typography.fallback.fontFamily}`,
        fontWeight: theme.typography.display.fontWeight,
        color: theme.color.highlight
      }}
      >
        Display
      </h2>
      <h2 style={{
        fontFamily: `"${theme.typography.body.regular.fontFamily}", ${theme.typography.fallback.fontFamily} `,
        fontWeight: theme.typography.body.regular.fontWeight,
        color: theme.color.highlight
      }}
      >
        Body Regular
      </h2>
      <h2 style={{
        fontFamily: `"${theme.typography.body.bold.fontFamily}", ${theme.typography.fallback.fontFamily}`,
        fontWeight: theme.typography.body.bold.fontWeight,
        color: theme.color.highlight
      }}
      >
        Body Bold
      </h2>
    </>
  )
}

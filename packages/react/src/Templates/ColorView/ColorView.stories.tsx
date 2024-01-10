/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
import React from 'react'
import { useTheme } from 'react-jss'
import { Theme, Color } from '@naturacosmeticos/natds-themes'
import ColorView from './ColorView'

const description = () => `
> ColorView used to identify Colors Token key and value.
`

export default {
  component: <>Colors</>,
  parameters: {
    componentSubtitle: '',
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'Templates/ColorView'
}

const keysToRemove = ['neutral50',
  'neutral100', 'neutral200',
  'neutral300', 'neutral400',
  'neutral500', 'neutral600',
  'neutral700', 'neutral800',
  'neutral900'
]
function removeKeys(obj: Color) {
  for (const key of keysToRemove) {
    if (obj[key]) {
      // eslint-disable-next-line no-param-reassign
      delete obj[key]
    }
  }
  return obj
}

export const ColorViews = () => {
  const theme: Theme = useTheme()
  const { color } = theme
  const ArrayTheme = Object.entries(removeKeys(color))

  return (

    <div style={{ display: 'flex', flexWrap: 'wrap', padding: '30px' }}>
      {
        ArrayTheme.map((label) => <ColorView labelToken={label[0] as keyof Color} keyToken={label[1]} />)

      }
    </div>
  )
}

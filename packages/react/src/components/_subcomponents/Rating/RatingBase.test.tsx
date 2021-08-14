import React from 'react'
import renderWithTheme from '../../../helpers/renderWithTheme'
import RatingBase, { getRatingColor } from './RatingBase'
import mockTheme from '../../../ThemeProvider/mock-theme.json'
import { RatingBaseProps } from '.'

describe('RatingBase component', () => {
  it('should render correctly with the given props', () => {
    const { styles, component } = renderWithTheme(<RatingBase ariaLabel="Rating Base" size="large" onClick={() => ''} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  describe('getRatingColor', () => {
    it('should return the hexa color for active and filled icon', () => {
      const props: RatingBaseProps = {
        iconFilled: true,
        iconActive: true,
        disabled: false,
        ariaLabel: '',
        onClick: () => '',
        size: 'huge'
      }

      const result = getRatingColor(mockTheme)(props)

      expect(result).toBe('#F8B546')
    })

    it('should return the mediumEmphasis color when Rating is disabled and is filled', () => {
      const props: RatingBaseProps = {
        iconFilled: true,
        iconActive: true,
        disabled: true,
        ariaLabel: '',
        onClick: () => '',
        size: 'huge'
      }

      const result = getRatingColor(mockTheme)(props)

      expect(result).toBe('#777777')
    })
  })
})

import React from 'react'
import Badge, { isBadgeStandard, showValue } from './Badge'
import renderWithTheme from '../../helpers/renderWithTheme'
import { BadgeProps } from './Badge.props'

describe('Badge component', () => {
  describe('Pulse variant', () => {
    it('should render correctly', () => {
      const { styles, component } = renderWithTheme(<Badge variant="pulse" />)

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })
  })
  describe('Dot variant', () => {
    it('should render correctly', () => {
      const { styles, component } = renderWithTheme(<Badge variant="dot" />)

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })
  })
  describe('Standard variant', () => {
    it('should render correctly', () => {
      const { styles, component } = renderWithTheme(<Badge variant="standard" value={99} />)

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })
    it('should render the limit with a plus sign when it is less than the given value.', () => {
      const { styles, component } = renderWithTheme(<Badge variant="standard" value={99} limit={99} testID="ds-standard-badge" />)

      const element = component.getByTestId('ds-standard-badge')

      expect(element).toHaveTextContent(/^99\+$/)
      expect([styles.toString(), component.container]).toMatchSnapshot()
    })
  })

  describe('showValue', () => {
    it('should only return the value when it is less than the limit', () => {
      expect(showValue({ value: 99, limit: 100, variant: 'standard' })).toBe(99)
    })
    it('should return the limit with a plus sign when the value is greater or equal than it', () => {
      expect(showValue({ value: 99, limit: 99, variant: 'standard' })).toBe('99+')
    })
  })

  describe('isBadgeStandard', () => {
    it('should return true when the variant is standard', () => {
      const props = { variant: 'standard' } as BadgeProps

      expect(isBadgeStandard(props)).toBe(true)
    })

    it('should return true when the variant is different than standard', () => {
      const props = { variant: 'dot' } as BadgeProps

      expect(isBadgeStandard(props)).toBe(false)
    })
  })
})

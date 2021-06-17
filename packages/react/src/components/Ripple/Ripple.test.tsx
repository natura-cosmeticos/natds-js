import React from 'react'
import { act, fireEvent } from '@testing-library/react'
import renderWithTheme from '../../helpers/renderWithTheme'
import { Ripple } from '.'
import { getBiggestSide } from './Ripple'

jest.useFakeTimers()

const classWithRippleAnimation = 'ripple-0-2-3 ripple-d1-0-2-8 rippleActive-0-2-5 rippleActive-d3-0-2-10'

describe('Ripple', () => {
  it('should render correctly with children', () => {
    const { styles, component } = renderWithTheme(<Ripple> any children </Ripple>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should return the biggest side of container', () => {
    const container = { width: 214, height: 40 }
    const result = getBiggestSide(container)

    expect(result).toBe(214)
  })
  it('should add ripple animation class', async () => {
    const { component } = renderWithTheme(<Ripple> any children </Ripple>)

    const wrapper = component.getByTestId('ripple-wrapper')
    const rippleAnimation = component.getByTestId('ripple-animation')

    expect(rippleAnimation).not.toHaveClass(classWithRippleAnimation)
    fireEvent.click(wrapper)
    expect(rippleAnimation).toHaveClass(classWithRippleAnimation)

    act(() => jest.advanceTimersByTime(1000))
    expect(rippleAnimation).not.toHaveClass(classWithRippleAnimation)
  })
  it('should not add ripple animation class when Ripple is disabled', () => {
    const { component } = renderWithTheme(<Ripple disabled> any children </Ripple>)

    const wrapper = component.getByTestId('ripple-wrapper')
    const ripleAnimation = component.getByTestId('ripple-animation')

    expect(ripleAnimation).not.toHaveClass(classWithRippleAnimation)
    fireEvent.click(wrapper)
    expect(ripleAnimation).not.toHaveClass(classWithRippleAnimation)
  })

  it('should set tabIndex to allow focus effect', () => {
    const { component } = renderWithTheme(<Ripple focus> any children </Ripple>)

    const wrapper = component.getByTestId('ripple-wrapper')

    expect(wrapper).toHaveAttribute('tabindex', '0')
  })
})

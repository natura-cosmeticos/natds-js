import React from 'react'
import { Rating } from '.'
import renderWithTheme from '../../helpers/renderWithTheme'
import {
  RatingCounter,
  RatingInput,
  RatingProps,
  RatingReadOnly
} from './Rating.props'

const defaultProps: RatingProps = {
  ariaLabel: 'Rating'
}

const ratingCounterDefaultProps: RatingCounter = {
  ...defaultProps,
  label: 'Placeholder',
  size: 'small',
  variant: 'counter'
}

const ratingInputDefaultProps: RatingInput = {
  ...defaultProps,
  ariaLabel: 'Rating Input',
  onClick: () => '',
  rate: 0,
  size: 'semi',
  variant: 'input'
}

const ratingReadOnlyDefaultProps: RatingReadOnly = {
  ...defaultProps,
  ariaLabel: 'Rating Read-Only',
  rate: 0,
  size: 'small',
  variant: 'read-only'
}

describe('Rating component', () => {
  describe('Counter variant', () => {
    it('should render correctly', () => {
      const { styles, component } = renderWithTheme(<Rating {...ratingCounterDefaultProps} />)

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })
    it('should render correctly when align is right', () => {
      const { styles, component } = renderWithTheme(<Rating {...ratingCounterDefaultProps} align="right" />)

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })
    it('should render correctly with the given size', () => {
      const { styles, component } = renderWithTheme(<Rating {...ratingCounterDefaultProps} size="semi" />)

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })
  })
  describe('Input variant', () => {
    it('should render correctly', () => {
      const { styles, component } = renderWithTheme(<Rating {...ratingInputDefaultProps} />)

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })
    it('should render correctly with the given label', () => {
      const { styles, component } = renderWithTheme(<Rating {...ratingInputDefaultProps} label="Placeholder" />)

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })
    it('should render correctly with the given rate', () => {
      const { styles, component } = renderWithTheme(
        <Rating {...ratingInputDefaultProps} rate={3} />
      )

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })
    it('should render correctly with the given size', () => {
      const { styles, component } = renderWithTheme(<Rating {...ratingInputDefaultProps} size="medium" />)

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })
    it('should render correctly when is disabled', () => {
      const { styles, component } = renderWithTheme(
        <Rating {...ratingInputDefaultProps} disabled />
      )

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })
  })
})

describe('ReadOnly variant', () => {
  it('should render correctly', () => {
    const { styles, component } = renderWithTheme(<Rating {...ratingReadOnlyDefaultProps} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly with the given rate', () => {
    const { styles, component } = renderWithTheme(
      <Rating {...ratingReadOnlyDefaultProps} rate={3} />
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly with the given size', () => {
    const { styles, component } = renderWithTheme(<Rating {...ratingReadOnlyDefaultProps} size="semiX" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})

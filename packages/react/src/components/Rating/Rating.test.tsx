/* eslint-disable max-lines-per-function */
import React from 'react'
import { fireEvent, waitFor } from '@testing-library/react'
import RatingBase, { getRatingColor, RatingBaseProps } from './RatingBase'
import mockTheme from '../../ThemeProvider/mock-theme.json'
import renderWithTheme from '../../helpers/renderWithTheme'
import { RatingCounterProps, RatingInputProps, RatingReadOnlyProps } from './Rating.props'
import Rating from './Rating'

const ratingBaseProps: RatingBaseProps = {
  ariaLabel: 'rating',
  onClick: () => '',
  size: 'semi'
}

const ratingCounterProps: RatingCounterProps = {
  ariaLabel: '',
  size: 'semi',
  label: 'Placeholder',
  variant: 'counter'
}

const ratingInputProps: RatingInputProps = {
  ariaLabel: '',
  size: 'semi',
  label: 'Placeholder',
  variant: 'input',
  onClick: () => '',
  rate: 0
}

const ratingReadOnlyProps: RatingReadOnlyProps = {
  ariaLabel: '',
  rate: 0,
  size: 'semi',
  variant: 'read-only'
}

describe('Rating', () => {
  it('should render one time when variant is Counter', () => {
    const { component: { getAllByTestId } } = renderWithTheme(<Rating {...ratingCounterProps} testID="rating-counter" />)

    expect(getAllByTestId('rating-counter').length).toBe(1)
  })

  it('should render one time when variant is Input', () => {
    const { component: { getAllByTestId } } = renderWithTheme(<Rating {...ratingInputProps} testID="rating-input" />)

    expect(getAllByTestId('rating-input').length).toBe(5)
  })

  it('should render one time when variant is Read-Only', () => {
    const { component: { getAllByTestId } } = renderWithTheme(<Rating {...ratingInputProps} testID="rating-read-only" />)

    expect(getAllByTestId('rating-read-only').length).toBe(5)
  })
  describe('Counter', () => {
    it('should render correctly with given props', () => {
      const { styles, component } = renderWithTheme(<Rating {...ratingCounterProps} />)

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })
    it('should render correctly when align is right', () => {
      const { styles, component } = renderWithTheme(
        <Rating {...ratingCounterProps} align="right" />
      )

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })
  })

  describe('Input', () => {
    it('should render correctly with given props', () => {
      const { styles, component } = renderWithTheme(<Rating {...ratingInputProps} />)

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })
    it('should render correctly when is disabled', () => {
      const { styles, component } = renderWithTheme(
        <Rating {...ratingInputProps} disabled />
      )

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })

    it('should render correctly with label', () => {
      const { styles, component } = renderWithTheme(
        <Rating {...ratingInputProps} label="Placebolder" />
      )

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })

    it('should call onClick', () => {
      const onClickMock = jest.fn()
      const { component: { getAllByTestId } } = renderWithTheme(
        <Rating {...ratingInputProps} testID="rating-1" onClick={onClickMock} />
      )

      fireEvent.click(getAllByTestId('rating-1')[1])

      expect(onClickMock).toHaveBeenCalledTimes(1)
    })

    it('should change to active a rating star with mouseEnter', async () => {
      const { styles, component: { getAllByTestId, container } } = renderWithTheme(
        <Rating {...ratingInputProps} testID="rating-1" />
      )

      fireEvent.mouseEnter(getAllByTestId('rating-1')[1])

      await waitFor(() => {
        expect([styles.toString(), container]).toMatchSnapshot()
        expect(getAllByTestId('icon-filled-action-rating').length).toBe(2)
      })

      fireEvent.mouseLeave(getAllByTestId('rating-1')[1])
      expect(getAllByTestId('icon-outlined-action-rating').length).toBe(5)
    })
  })

  describe('Read-Only', () => {
    it('should render correctly with given props', () => {
      const { styles, component } = renderWithTheme(<Rating {...ratingReadOnlyProps} />)

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })

    it('should render correctly with rate equal 3', () => {
      const { styles, component } = renderWithTheme(<Rating {...ratingReadOnlyProps} rate={3} />)

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })
  })
})

describe('RatingBase', () => {
  describe('Component', () => {
    it('should render correctly with default props', () => {
      const { styles, component } = renderWithTheme(
        <RatingBase {...ratingBaseProps} />
      )

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })

    it('should render correctly when is disabled', () => {
      const { styles, component } = renderWithTheme(
        <RatingBase {...ratingBaseProps} disabled />
      )

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })

    it('should render correctly when is not filled', () => {
      const { styles, component } = renderWithTheme(
        <RatingBase {...ratingBaseProps} iconFilled={false} />
      )

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })

    it('should call onClick when is clickable', () => {
      const onClickMock = jest.fn()

      const { component: { getByTestId } } = renderWithTheme(
        <RatingBase {...ratingBaseProps} onClick={onClickMock} testID="rating" isClickable />
      )

      fireEvent.click(getByTestId('rating'))

      expect(onClickMock).toHaveBeenCalledTimes(1)
    })

    it('should call onMouseEnter and onMouseLeave', () => {
      const onMouseEnterMock = jest.fn()
      const onMouseLeaveMock = jest.fn()

      const { component: { getByTestId } } = renderWithTheme(
        <RatingBase {...ratingBaseProps} onMouseEnter={onMouseEnterMock} onMouseLeave={onMouseLeaveMock} testID="rating" isClickable />
      )

      fireEvent.mouseEnter(getByTestId('rating'))
      expect(onMouseEnterMock).toHaveBeenCalledTimes(1)

      fireEvent.mouseLeave(getByTestId('rating'))
      expect(onMouseLeaveMock).toHaveBeenCalledTimes(1)
    })
  })
  describe('getRatingColor', () => {
    it('should return to hex color when icon is activated, filled and not disabled', () => {
      const result = getRatingColor(mockTheme)({
        iconFilled: true,
        iconActive: true,
        disabled: false,
        ariaLabel: '',
        onClick: () => '',
        size: 'semi'
      })

      expect(result).toBe('#F8B546')
    })

    it('should return to mediumEmphasis color when icon is disabled', () => {
      const result = getRatingColor(mockTheme)({
        iconFilled: true,
        iconActive: true,
        disabled: true,
        ariaLabel: '',
        onClick: () => '',
        size: 'semi'
      })

      expect(result).toBe('#777777')
    })
  })
})

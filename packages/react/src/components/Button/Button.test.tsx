/* eslint-disable max-lines-per-function */
import * as React from 'react'
import { fireEvent } from '@testing-library/react'
import Button from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

jest.mock('../Ripple/Ripple')

describe('Button component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Button text="button" onClick={() => ''} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should call onClick', () => {
    const onClickMock = jest.fn()
    const { component: { getByTestId } } = renderWithTheme(<Button text="button" onClick={onClickMock} testID="btn-test" />)

    fireEvent.click(getByTestId('btn-test'))

    expect(onClickMock).toHaveBeenCalled()
  })

  it('should render correctly when the size is semi', () => {
    const { styles, component } = renderWithTheme(<Button text="button" size="semi" onClick={() => ''} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the size is medium', () => {
    const { styles, component } = renderWithTheme(<Button text="button" size="medium" onClick={() => ''} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the fullWidth is true', () => {
    const { styles, component } = renderWithTheme(<Button text="button" fullWidth onClick={() => ''} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly when the variant is contained and disabled is true', () => {
    const { styles, component } = renderWithTheme(<Button text="button" disabled onClick={() => ''} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the variant is outlined', () => {
    const { styles, component } = renderWithTheme(<Button text="button" variant="outlined" onClick={() => ''} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the variant is text', () => {
    const { styles, component } = renderWithTheme(<Button text="button" variant="text" onClick={() => ''} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly when the variant is text and is disabled', () => {
    const { styles, component } = renderWithTheme(<Button text="button" variant="text" disabled onClick={() => ''} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the variant is outlined and is disabled', () => {
    const { styles, component } = renderWithTheme(<Button text="button" variant="outlined" disabled onClick={() => ''} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render icon to the left when the showIcon is true', () => {
    const { styles, component } = renderWithTheme(<Button text="button" showIcon onClick={() => ''} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render icon to the right when the showIcon is true and iconPosition is right', () => {
    const { styles, component } = renderWithTheme(<Button text="button" showIcon iconPosition="right" onClick={() => ''} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})

import * as React from 'react'
import { fireEvent } from '@testing-library/react'
import Button from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

jest.mock('../Ripple/Ripple')

describe('Button component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Button label="button" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should call onClick', () => {
    const onClickMock = jest.fn()
    const { component: { getByTestId } } = renderWithTheme(<Button label="button" onClick={onClickMock} testID="btn-test" />)

    fireEvent.click(getByTestId('btn-test'))

    expect(onClickMock).toHaveBeenCalled()
  })

  it('should render correctly when the size is semi', () => {
    const { styles, component } = renderWithTheme(<Button label="button" size="semi" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the size is medium', () => {
    const { styles, component } = renderWithTheme(<Button label="button" size="medium" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the fullWidth is true', () => {
    const { styles, component } = renderWithTheme(<Button label="button" fullWidth />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly when the variant is contained and disabled is true', () => {
    const { styles, component } = renderWithTheme(<Button label="button" disabled />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the variant is outlined', () => {
    const { styles, component } = renderWithTheme(<Button label="button" variant="outlined" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the variant is text', () => {
    const { styles, component } = renderWithTheme(<Button label="button" variant="text" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly when the variant is text and is disabled', () => {
    const { styles, component } = renderWithTheme(<Button label="button" variant="text" disabled />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the variant is outlined and is disabled', () => {
    const { styles, component } = renderWithTheme(<Button label="button" variant="outlined" disabled />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})

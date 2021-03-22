import * as React from 'react'
import { fireEvent } from '@testing-library/react'
import Button from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Button component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Button label="button" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should call onClick', () => {
    const onClickMock = jest.fn()
    const { component: { getByTestId } } = renderWithTheme(<Button label="button" onClick={onClickMock} testID="btn-test" />)

    fireEvent(getByTestId('btn-test'), new MouseEvent('click', { bubbles: true }))

    expect(onClickMock).toHaveBeenCalled()
  })
})

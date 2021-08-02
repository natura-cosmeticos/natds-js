import React from 'react'
import { fireEvent } from '@testing-library/react'
import renderWithTheme from '../../helpers/renderWithTheme'
import ListItem from './ListItem'

describe('ListItem component', () => {
  it('should render correctly', () => {
    const { styles, component } = renderWithTheme(<ListItem key="some-item">some item here</ListItem>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly with divider', () => {
    const { styles, component } = renderWithTheme(<ListItem key="some-item" divider="full-bleed">some item here</ListItem>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when is selected', () => {
    const { styles, component } = renderWithTheme(<ListItem key="some-item" selected>some item here</ListItem>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should call onClick', () => {
    const onClickMock = jest.fn()
    const { component: { getByTestId } } = renderWithTheme(<ListItem key="some-item" testID="list-item-test" onClick={onClickMock}>some item here</ListItem>)

    fireEvent.click(getByTestId('list-item-test'))

    expect(onClickMock).toHaveBeenCalled()
  })
})

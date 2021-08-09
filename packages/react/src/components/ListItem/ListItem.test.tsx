import React from 'react'
import { fireEvent } from '@testing-library/react'
import renderWithTheme from '../../helpers/renderWithTheme'
import ListItem from './ListItem'
import { Divider } from '../Divider'

describe('ListItem component', () => {
  it('should render correctly', () => {
    const { styles, component } = renderWithTheme(<ListItem key="some-item">some item here</ListItem>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with divider', () => {
    const { styles, component } = renderWithTheme(<ListItem key="some-item" SeparatorComponent={<Divider />}>some item here</ListItem>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly when interaction is selectable and the list item is selected', () => {
    const { styles, component } = renderWithTheme(<ListItem key="some-item" interaction="selectable" selected>some item here</ListItem>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should call onClick', () => {
    const onClickMock = jest.fn()
    const { component: { getByTestId } } = renderWithTheme(
      <ListItem
        interaction="action"
        key="some-item"
        onClick={onClickMock}
        testID="list-item-test"
      >
        some item here
      </ListItem>
    )

    fireEvent.click(getByTestId('list-item-test'))

    expect(onClickMock).toHaveBeenCalled()
  })
})

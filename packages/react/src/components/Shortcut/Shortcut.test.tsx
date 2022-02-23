import { fireEvent } from '@testing-library/dom'
import React from 'react'
import Shortcut, { ShortcutProps } from '.'
import renderWithTheme from '../../helpers/renderWithTheme'
import Badge from '../Badge'

const defaultProps: ShortcutProps = {
  id: 'shortcut-id',
  onClick: () => ({}),
  IconComponent: <div />
}

describe('Shortcut component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Shortcut {...defaultProps} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with label', () => {
    const { styles, component } = renderWithTheme(<Shortcut {...defaultProps} label="Shortcut label" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with badge', () => {
    const { styles, component } = renderWithTheme(
      <Shortcut {...defaultProps} label="Shortcut label" BadgeComponent={<Badge variant="standard" value={99} limit={99} />} />
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly when is disabled', () => {
    const { styles, component } = renderWithTheme(<Shortcut {...defaultProps} disabled />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should call onClick function', () => {
    const onClickMock = jest.fn()

    const { component: { getByRole } } = renderWithTheme(
      <Shortcut {...defaultProps} onClick={onClickMock} label="shortcut" id="shortcut" />
    )

    fireEvent.click(getByRole('button', { name: 'shortcut' }))

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('should NOT call onClick when is disabled', () => {
    const onClickMock = jest.fn()

    const { component: { getByRole } } = renderWithTheme(
      <Shortcut {...defaultProps} onClick={onClickMock} disabled label="shortcut" id="shortcut" />
    )

    fireEvent.click(getByRole('button', { name: 'shortcut' }))

    expect(onClickMock).not.toHaveBeenCalledTimes(1)
  })
})

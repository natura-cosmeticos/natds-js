import { fireEvent } from '@testing-library/dom'
import React from 'react'
import Shortcut, { ShortcutProps } from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

const defaultProps: ShortcutProps = {
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
      <Shortcut {...defaultProps} label="Shortcut label" notify value={10} limit={10} />
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly when is disabled', () => {
    const { styles, component } = renderWithTheme(<Shortcut {...defaultProps} disabled />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should NOT call onClick when is disabled', () => {
    const onClickMock = jest.fn()

    const { component: { getByRole } } = renderWithTheme(
      <Shortcut {...defaultProps} onClick={onClickMock} disabled label="Shortcut" />
    )

    fireEvent.click(getByRole('button', { name: 'Shortcut' }))

    expect(onClickMock).not.toHaveBeenCalledTimes(1)
  })
})

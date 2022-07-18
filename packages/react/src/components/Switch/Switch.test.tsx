import React from 'react'
import userEvent from '@testing-library/user-event'
import { fireEvent } from '@testing-library/react'
import Switch, { SwitchProps } from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

const switchProps: SwitchProps = {
  onChange: jest.fn(),
  value: 'test'
}

describe('Switch component', () => {
  it('should render correctly when disabled is false and checked is false', () => {
    const { styles, component } = renderWithTheme(<Switch {...switchProps} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly when disabled is false and checked is true', () => {
    const { styles, component } = renderWithTheme(<Switch {...switchProps} checked />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly when disabled is true and checked is false', () => {
    const { styles, component } = renderWithTheme(<Switch {...switchProps} disabled />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly when disabled is true and checked is true', () => {
    const { styles, component } = renderWithTheme(<Switch {...switchProps} disabled checked />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should call onChange when click on the switch', () => {
    const onChangeMock = jest.fn()
    const {
      component: { getByTestId }
    } = renderWithTheme(<Switch {...switchProps} onChange={onChangeMock} testID="switch-test" />)

    const switchComponent = getByTestId('switch-test')
    userEvent.click(switchComponent)

    expect(onChangeMock).toHaveBeenCalled()
  })

  it('should not call onChange when click on the disabled switch', () => {
    const onChangeMock = jest.fn()
    const {
      component: { getByTestId }
    } = renderWithTheme(
      <Switch {...switchProps} onChange={onChangeMock} testID="switch-test" disabled />
    )

    const switchComponent = getByTestId('switch-test')
    userEvent.click(switchComponent)

    expect(switchComponent).toBeDisabled()
    expect(onChangeMock).not.toHaveBeenCalled()
  })

  it('should blur the switch component when mouse leave', () => {
    const {
      component: { getByTestId, container }
    } = renderWithTheme(<Switch {...switchProps} testID="switch-test" />)

    const switchComponent = getByTestId('switch-test')
    switchComponent.focus()

    expect(switchComponent).toHaveFocus()

    const labelElement = container.querySelector('label')
    fireEvent.mouseLeave(labelElement as Element)

    expect(switchComponent).not.toHaveFocus()
  })
})

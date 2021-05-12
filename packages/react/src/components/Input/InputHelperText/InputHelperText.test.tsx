import React from 'react'
import renderWithTheme from '../../../helpers/renderWithTheme'
import InputHelperText, { getIconColor, getIconName } from './InputHelperText'

describe('InputHelperText component', () => {
  it('should render correctly with helper text', () => {
    const { styles, component } = renderWithTheme(<InputHelperText helperText="some helper text" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly with helper text and feedback error', () => {
    const { styles, component } = renderWithTheme(<InputHelperText helperText="some helper text" feedback="error" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly with helper text and feedback success', () => {
    const { styles, component } = renderWithTheme(<InputHelperText helperText="some helper text" feedback="success" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})

describe('getIconName', () => {
  it('should return outlined-action-check when receive feedback success', () => {
    expect(getIconName('success')).toBe('outlined-action-check')
  })
  it('should return outlined-action-cancel when receive feedback error', () => {
    expect(getIconName('error')).toBe('outlined-action-cancel')
  })
})

describe('getIconColor', () => {
  it('should return `success` when receive feedback success', () => {
    expect(getIconColor('success')).toBe('success')
  })
  it('should return `alert` when receive feedback error', () => {
    expect(getIconColor('error')).toBe('alert')
  })
})

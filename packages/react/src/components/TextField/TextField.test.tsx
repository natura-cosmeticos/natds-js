/* eslint-disable max-lines-per-function */
import React from 'react'
import TextField, { getIconColor, getIconName } from './TextField'
import renderWithTheme from '../../helpers/renderWithTheme'
import { TextFieldProps } from './TextField.props'

const defaultProps: TextFieldProps = {
  onBlur: () => '',
  onChange: () => '',
  onFocus: () => ''
}

describe('TextField component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<TextField {...defaultProps} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when size is medium', () => {
    const { styles, component } = renderWithTheme(<TextField {...defaultProps} size="medium" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when it has an error feedback', () => {
    const { styles, component } = renderWithTheme(<TextField {...defaultProps} feedback="error" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when it has an success feedback', () => {
    const { styles, component } = renderWithTheme(<TextField {...defaultProps} feedback="success" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when is required', () => {
    const { styles, component } = renderWithTheme(<TextField {...defaultProps} required />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when is disabled', () => {
    const { styles, component } = renderWithTheme(<TextField {...defaultProps} required />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when is read only', () => {
    const { styles, component } = renderWithTheme(<TextField {...defaultProps} required />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when it has a helper text', () => {
    const { styles, component } = renderWithTheme(<TextField {...defaultProps} required helperText="any helper text here" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when it has an icon button action', () => {
    const { styles, component } = renderWithTheme(<TextField {...defaultProps} required action="icon" iconName="filled-action-love" ariaLabel="any label" onClick={() => ''} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when it has an image action', () => {
    const { styles, component } = renderWithTheme(<TextField {...defaultProps} required action="image" src="" alt="" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when it has multiline type', () => {
    const { styles, component } = renderWithTheme(<TextField {...defaultProps} required type="multiline" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when it has password type', () => {
    const { styles, component } = renderWithTheme(<TextField {...defaultProps} required type="password" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
    expect(component.getByTestId('ds-input')).toHaveAttribute('type', 'password')
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

import React from 'react'
import renderWithTheme from '../../../helpers/renderWithTheme'
import InputLabel from '.'
import { InputLabelProps } from './InputLabel'

const defaultProps: InputLabelProps = {
  id: 'label',
  label: 'some label'
}

describe('Input component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<InputLabel {...defaultProps} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly when is required', () => {
    const { styles, component } = renderWithTheme(<InputLabel {...defaultProps} required />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when there is an error feedback', () => {
    const { styles, component } = renderWithTheme(<InputLabel {...defaultProps} feedback="error" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when there is an success feedback', () => {
    const { styles, component } = renderWithTheme(<InputLabel {...defaultProps} feedback="success" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})

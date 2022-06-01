import { screen } from '@testing-library/react'
import React from 'react'
import Alert from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Alert component', () => {
  it('should render component with info styles if color is not defined', () => {
    const { styles, component } = renderWithTheme(
      <Alert title="Title">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Alert>
    )

    expect(screen.getByTestId('icon-outlined-alert-info')).toBeInTheDocument()
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render component without icon if showIcon is false', () => {
    renderWithTheme(
      <Alert title="Title" showIcon={false}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Alert>
    )

    expect(screen.queryByTestId('icon-outlined-alert-info')).not.toBeInTheDocument()
  })

  it('should render component without title if is not defined', () => {
    renderWithTheme(
      <Alert>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Alert>
    )

    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
  })
})

describe('Alert colors', () => {
  it('should render component with success styles', () => {
    renderWithTheme(
      <Alert color="success">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Alert>
    )

    expect(screen.getByTestId('icon-outlined-alert-check')).toBeInTheDocument()
  })

  it('should render component with error styles', () => {
    renderWithTheme(
      <Alert color="error">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Alert>
    )

    expect(screen.getByTestId('icon-outlined-alert-cancel')).toBeInTheDocument()
  })

  it('should render component with warning styles', () => {
    renderWithTheme(
      <Alert color="warning">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Alert>
    )

    expect(screen.getByTestId('icon-outlined-alert-warning')).toBeInTheDocument()
  })
})

describe('Alert border styles', () => {
  it('should render component without borders by default', () => {
    const { styles } = renderWithTheme(
      <Alert color="success">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Alert>
    )

    expect(styles.toString()).toContain('border: none')
  })

  it('should render component with borders if type is outline', () => {
    const { styles } = renderWithTheme(
      <Alert color="success" type="outlined">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Alert>
    )

    expect(styles.toString()).toContain('border: solid 1px #37B24D;')
  })
})

describe('Alert custom', () => {
  it('should render component with custom styles if colors is custom', () => {
    const { styles } = renderWithTheme(
      <Alert color="custom" customIcon="outlined-default-mockup" customBackgroundColor="#ff0000">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Alert>
    )

    expect(styles.toString()).toContain('background: #ff0000')
    expect(screen.getByTestId('icon-outlined-default-mockup')).toBeInTheDocument()
  })

  it('should render component with custom styles and without icon', () => {
    const { styles } = renderWithTheme(
      <Alert color="custom" customBackgroundColor="#ff0000">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Alert>
    )

    expect(styles.toString()).toContain('background: #ff0000')
    expect(screen.queryByTestId('icon-outlined-default-mockup')).not.toBeInTheDocument()
  })
})

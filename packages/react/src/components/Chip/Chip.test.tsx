import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Chip from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Chip component', () => {
  it('should render with neutral border as default', () => {
    const { styles } = renderWithTheme(<Chip labelText="Chip label" />)

    expect(styles.toString()).toContain('border-color: #bbbbbb')
  })

  it('should render with primary border when color is primary', () => {
    const { styles } = renderWithTheme(<Chip labelText="Chip label" color="primary" />)

    expect(styles.toString()).toContain('border-color: #f4ab34')
  })

  it('should render with secondary border when color is secondary', () => {
    const { styles } = renderWithTheme(<Chip labelText="Chip label" color="secondary" />)

    expect(styles.toString()).toContain('border-color: #ff6b0b')
  })

  it('should render Avatar left side', () => {
    renderWithTheme(<Chip labelText="Chip label" leftAvatar="placeholder.png" />)

    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('should render Avatar right side', () => {
    renderWithTheme(<Chip labelText="Chip label" rightAvatar="placeholder.png" />)

    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('should render leftIcon', () => {
    renderWithTheme(<Chip labelText="Chip label" leftIcon="outlined-default-mockup" />)

    expect(screen.getByTestId('icon-outlined-default-mockup')).toBeInTheDocument()
  })

  it('should render rightIcon', () => {
    renderWithTheme(<Chip labelText="Chip label" rightIcon="outlined-default-mockup" />)

    expect(screen.getByTestId('icon-outlined-default-mockup')).toBeInTheDocument()
  })

  it('should render icons both sides', () => {
    renderWithTheme(<Chip
      labelText="Chip label"
      leftIcon="outlined-default-mockup"
      rightIcon="outlined-default-mockup"
    />)

    expect(screen.getAllByTestId('icon-outlined-default-mockup')).toHaveLength(2)
  })

  it('should calls onClick when chip is clicked', () => {
    const handleClick = jest.fn()

    renderWithTheme(<Chip
      labelText="Chip label"
      onClick={handleClick}
    />)

    userEvent.click(screen.getByRole('button'))

    expect(handleClick).toBeCalled()
  })
})

import React from 'react'
import Typography from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Typography component', () => {
  it('should render the component as body1 when variant is not defined', () => {
    const { styles, component } = renderWithTheme(<Typography>hello</Typography>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
    expect(component.getByText(/hello/i)).toBeInTheDocument()
    expect(styles.includes('font-size: 16px;')).toBeTruthy()
  })

  describe('Heading variants', () => {
    it('should render the component as heading1', () => {
      const { styles, component } = renderWithTheme(<Typography variant="heading1">hello</Typography>)

      expect([styles.toString(), component.container]).toMatchSnapshot()
      expect(component.getByRole('heading')).toBeInTheDocument()
      expect(styles.includes('font-size: 96px;')).toBeTruthy()
    })

    it('should render the component as heading2', () => {
      const { styles, component } = renderWithTheme(<Typography variant="heading2">hello</Typography>)

      expect([styles.toString(), component.container]).toMatchSnapshot()
      expect(component.getByRole('heading')).toBeInTheDocument()
      expect(styles.includes('font-size: 60px;')).toBeTruthy()
    })

    it('should render the component as heading3', () => {
      const { styles, component } = renderWithTheme(<Typography variant="heading3">hello</Typography>)

      expect([styles.toString(), component.container]).toMatchSnapshot()
      expect(component.getByRole('heading')).toBeInTheDocument()
      expect(styles.includes('font-size: 48px;')).toBeTruthy()
    })

    it('should render the component as heading4', () => {
      const { styles, component } = renderWithTheme(<Typography variant="heading4">hello</Typography>)

      expect([styles.toString(), component.container]).toMatchSnapshot()
      expect(component.getByRole('heading')).toBeInTheDocument()
      expect(styles.includes('font-size: 34px;')).toBeTruthy()
    })

    it('should render the component as heading5', () => {
      const { styles, component } = renderWithTheme(<Typography variant="heading5">hello</Typography>)

      expect([styles.toString(), component.container]).toMatchSnapshot()
      expect(component.getByRole('heading')).toBeInTheDocument()
      expect(styles.includes('font-size: 24px;')).toBeTruthy()
    })

    it('should render the component as heading6', () => {
      const { styles, component } = renderWithTheme(<Typography variant="heading6">hello</Typography>)

      expect([styles.toString(), component.container]).toMatchSnapshot()
      expect(component.getByRole('heading')).toBeInTheDocument()
      expect(styles.includes('font-size: 20px;')).toBeTruthy()
    })
  })

  describe('Subtitle variants', () => {
    it('should render the component as subtitle1', () => {
      const { styles, component } = renderWithTheme(<Typography variant="subtitle1">hello</Typography>)

      expect([styles.toString(), component.container]).toMatchSnapshot()
      expect(component.getByRole('heading')).toBeInTheDocument()
      expect(styles.includes('font-size: 16px;')).toBeTruthy()
    })

    it('should render the component as subtitle2', () => {
      const { styles, component } = renderWithTheme(<Typography variant="subtitle2">hello</Typography>)

      expect([styles.toString(), component.container]).toMatchSnapshot()
      expect(component.getByRole('heading')).toBeInTheDocument()
      expect(styles.includes('font-size: 14px;')).toBeTruthy()
    })
  })
})

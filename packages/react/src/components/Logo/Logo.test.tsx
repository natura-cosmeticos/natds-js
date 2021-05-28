import React from 'react'
import renderWithTheme from '../../helpers/renderWithTheme'
import Logo from './Logo'

const defaultURL = 'https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-themes@latest/dist/assets/natura-a-official.svg'
const customColorURL = 'https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-themes@latest/dist/assets/natura-a-custom.svg'
const secondaryModelURL = 'https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-themes@latest/dist/assets/natura-b-official.svg'

describe('Logo component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Logo />)

    expect(component.getByRole('img')).toHaveAttribute('src', defaultURL)
    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly with medium size', () => {
    const { styles, component } = renderWithTheme(<Logo size="medium" />)

    expect(component.getByRole('img')).toHaveAttribute('src', defaultURL)
    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly with custom color', () => {
    const { styles, component } = renderWithTheme(<Logo color="primary" />)

    expect(component.getByRole('img')).toHaveAttribute('src', customColorURL)
    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with secondary model', () => {
    const { styles, component } = renderWithTheme(<Logo model="secondary" />)

    expect(component.getByRole('img')).toHaveAttribute('src', secondaryModelURL)
    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})

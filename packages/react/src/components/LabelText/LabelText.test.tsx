import React from 'react'
import LabelText from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('LabelText component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<LabelText>Meu primeiro componente</LabelText>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render with default styles if hasError isnt passed', () => {
    const { styles, component } = renderWithTheme(<LabelText>Meu primeiro componente</LabelText>)

    expect(styles.toString().includes('#333333')).toBeTruthy()
  })

  it('should render with error styles if hasError is true', () => {
    const { styles } = renderWithTheme(
      <LabelText hasError>Meu primeiro componente</LabelText>
    )

    expect(styles.toString().includes('red')).toBeTruthy()
  })
})

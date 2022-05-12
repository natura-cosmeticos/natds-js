import { fireEvent, screen } from '@testing-library/react'
import React from 'react'
import TabItem from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

const onClickSpy = jest.fn()

describe('TabItem component', () => {
  beforeEach(() => jest.clearAllMocks())

  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<TabItem onClick={onClickSpy}>Tab Item</TabItem>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should calls onClick when component is clicked', () => {
    renderWithTheme(
      <TabItem onClick={onClickSpy}>Tab Item</TabItem>
    )

    fireEvent.click(screen.getByRole('button'))

    expect(onClickSpy).toHaveBeenCalled()
  })

  it("shouldn't call onClick when component is clicked but disabled", () => {
    renderWithTheme(
      <TabItem onClick={onClickSpy} isDisabled>Tab Item</TabItem>
    )

    fireEvent.click(screen.getByRole('button'))

    expect(onClickSpy).not.toHaveBeenCalled()
  })

  it('should render tab with border bottom when is active', () => {
    const { styles } = renderWithTheme(
      <TabItem onClick={onClickSpy} isActive>Tab Item</TabItem>
    )

    expect(styles).toContain('border-bottom')
  })
})

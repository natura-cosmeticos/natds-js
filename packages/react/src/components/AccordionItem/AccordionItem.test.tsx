import userEvent from '@testing-library/user-event'
import React from 'react'
import AccordionItem from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

const onClickSpy = jest.fn()

describe('AccordionItem component', () => {
  it('should render component with regular style as default', () => {
    const { styles, component } = renderWithTheme(
      <AccordionItem title="Lorem" onClick={onClickSpy}>Accordion Content</AccordionItem>
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should calls onClick when header is clicked', () => {
    const { component } = renderWithTheme(
      <AccordionItem title="Header title" onClick={onClickSpy}>Accordion Content</AccordionItem>
    )

    userEvent.click(component.getByText(/header title/i))

    expect(onClickSpy).toHaveBeenCalled()
  })

  it('should disabled clicks when is disabled (regular)', () => {
    const { styles } = renderWithTheme(
      <AccordionItem title="Header title" isDisabled onClick={onClickSpy}>Accordion Content</AccordionItem>
    )

    expect(styles.toString()).toContain('pointer-events: none')
  })

  it('should disabled clicks when is disabled (primary)', () => {
    const { styles } = renderWithTheme(
      <AccordionItem color="primary" title="Header title" isDisabled onClick={onClickSpy}>Accordion Content</AccordionItem>
    )

    expect(styles.toString()).toContain('pointer-events: none')
  })

  it('should toggle item when is active is true', () => {
    const { component } = renderWithTheme(
      <AccordionItem title="Header title" isActive onClick={onClickSpy}>Accordion Content</AccordionItem>
    )

    expect(component.getByTestId('icon-outlined-navigation-arrowtop')).toBeInTheDocument()
  })

  it('should render legend when is passed', () => {
    const { component } = renderWithTheme(
      <AccordionItem title="Header title" legend="Legend text" isActive onClick={onClickSpy}>Accordion Content</AccordionItem>
    )

    expect(component.getByText(/legend text/i)).toBeInTheDocument()
  })
})

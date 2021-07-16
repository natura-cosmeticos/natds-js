import React from 'react'
import { render } from '@testing-library/react'
import { Portal } from './Portal'

describe('Portal', () => {
  beforeAll(() => {
    document.body.innerHTML = '<div id="container"></div>'
  })
  it('should render element into a given element id', () => {
    const component = render(<Portal id="container"><p data-testid="something">something</p></Portal>)

    expect(component.baseElement).toMatchSnapshot()
    expect(document.getElementById('container')).toContainElement(component.getByTestId('something'))
  })

  it('should render element into a nested div', () => {
    const component = render(<Portal><p data-testid="something">something</p></Portal>)

    expect(component.baseElement).toMatchSnapshot()
    expect(component.getByTestId('something')).toBeInTheDocument()
  })
})

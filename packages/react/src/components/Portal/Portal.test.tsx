import React from 'react'
import { render } from '@testing-library/react'
import { Portal } from './Portal'

describe('Portal', () => {
  beforeAll(() => {
    document.body.innerHTML = '<div id="container"></div>'
  })
  it('should render element into body as default', () => {
    const component = render(<Portal><p data-testid="something">something</p></Portal>)

    expect(component.baseElement).toMatchSnapshot()
    expect(document.body).toContainElement(component.getByTestId('something'))
  })

  it('should render element into the givern container', () => {
    const component = render(<Portal container={() => document.getElementById('container')}><p data-testid="something">something</p></Portal>)

    expect(component.baseElement).toMatchSnapshot()
    expect(document.getElementById('container')).toContainElement(component.getByTestId('something'))
  })
})

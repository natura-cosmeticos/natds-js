import React from 'react'
import { act, screen } from '@testing-library/react'
import Button from '../Button'
import Snackbar, { refProp } from './Snackbar'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Snackbar component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Snackbar timer={5} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render title', () => {
    const { styles, component } = renderWithTheme(<Snackbar timer={5} title="Title" />)
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByTestId('title-item')).toBeInTheDocument()
    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render children', () => {
    const { styles, component } = renderWithTheme(<Snackbar timer={5}> Texto children</Snackbar>)
    expect(screen.getByText('Texto children')).toBeInTheDocument()
    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render with clicked in ref.current.show()', () => {
    const refN = React.createRef<refProp>()
    const { styles, component } = renderWithTheme(
      <Snackbar animation testID="ref-test" ref={refN} timer={5}> Texto children</Snackbar>
    )
    act(() => refN.current?.show())
    expect(screen.getByTestId('ref-test')).toBeVisible()
    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with buttonComponent Prop', () => {
    const { styles, component } = renderWithTheme(

      <Snackbar
        timer={5}
        buttonComponent={
          <Button testID="btn-include-component" onClick={() => ''}>Click</Button>
        }
      >
        {' '}
        Texto children

      </Snackbar>
    )
    expect(screen.getByTestId('btn-component')).toBeInTheDocument()
    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly with icon Prop', () => {
    renderWithTheme(

      <Snackbar
        timer={5}
        icon={<>Icon teste</>}
        buttonComponent={
          <Button onClick={() => ''}>Click</Button>
    }
      >
        {' '}
        Texto children

      </Snackbar>
    )
    expect(screen.getByTestId('icon-item')).toBeInTheDocument()
  })

  it('should render correctly with feedback success', () => {
    const { styles, component } = renderWithTheme(

      <Snackbar
        testID="bkg-color"
        timer={5}
        feedback="success"
      />

    )
    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with feedback error', () => {
    const { styles, component } = renderWithTheme(

      <Snackbar
        timer={5}
        feedback="error"
      />

    )
    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly with feedback warning', () => {
    const { styles, component } = renderWithTheme(

      <Snackbar
        timer={5}
        feedback="warning"
      />

    )
    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly with feedback info', () => {
    const { styles, component } = renderWithTheme(

      <Snackbar
        timer={5}
        feedback="info"
      />

    )
    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly with feedback default', () => {
    const { styles, component } = renderWithTheme(

      <Snackbar
        timer={5}
        feedback="default"
      />

    )
    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with position topLeft', () => {
    const { styles, component } = renderWithTheme(

      <Snackbar
        timer={5}
        position="topLeft"
      />

    )
    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly with position topRight', () => {
    const { styles, component } = renderWithTheme(

      <Snackbar
        timer={5}
        position="topRight"
      />

    )
    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with position topCenter', () => {
    const { styles, component } = renderWithTheme(

      <Snackbar
        timer={5}
        position="topCenter"
      />

    )
    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with position bottomLeft', () => {
    const { styles, component } = renderWithTheme(

      <Snackbar
        testID="snackContainerLeft"
        timer={5}
        position="bottomLeft"
      />

    )
    expect([styles.toString(), component.container]).toMatchSnapshot()
    const contentDiv = screen.getByTestId('snackContainerLeft')
    const style = window.getComputedStyle(contentDiv)
    expect(style.top).toBe('')
    expect(style.bottom).toBe('8px')
    expect(style.left).toBe('8px')
    expect(style.right).toBe('')
  })

  it('should render correctly with position bottomRight', () => {
    const { styles, component } = renderWithTheme(

      <Snackbar
        testID="snackContainerRight"
        timer={5}
        position="bottomRight"
      />

    )
    expect([styles.toString(), component.container]).toMatchSnapshot()
    const contentDiv = screen.getByTestId('snackContainerRight')
    const style = window.getComputedStyle(contentDiv)
    expect(style.top).toBe('')
    expect(style.bottom).toBe('8px')
    expect(style.left).toBe('')
    expect(style.right).toBe('8px')
  })

  it('should render correctly with position bottomCenter', () => {
    const { styles, component } = renderWithTheme(

      <Snackbar
        testID="snackContainer"
        timer={5}
        position="bottomCenter"
      />

    )
    expect([styles.toString(), component.container]).toMatchSnapshot()
    const contentDiv = screen.getByTestId('snackContainer')
    const style = window.getComputedStyle(contentDiv)
    expect(style.bottom).toBe('8px')
    expect(style.top).toBe('')
    expect(style.right).toBe('')
  })

  it('should render correctly with actionButtom inlineButton', () => {
    const { styles, component } = renderWithTheme(

      <Snackbar
        timer={5}
        actionButton="inlineButton"
      />

    )
    expect(screen.getByTestId('btn-action-wrapper')).toBeInTheDocument()
    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})

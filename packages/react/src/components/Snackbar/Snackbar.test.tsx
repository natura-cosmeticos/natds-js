import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import Button from '../Button'
import Snackbar from './Snackbar'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Snackbar component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Snackbar timer={5} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render title', () => {
    renderWithTheme(<Snackbar timer={5} title="Title" />)
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByTestId('title-item')).toBeInTheDocument()
  })
  it('should render children', () => {
    renderWithTheme(<Snackbar timer={5}> Texto children</Snackbar>)
    expect(screen.getByText('Texto children')).toBeInTheDocument()
  })
  it('should render with clicked in ref.current.show()', () => {
    const onClickMock = jest.fn()
    const snackRef = {
      current: {
        show: onClickMock
      }
    }
    const { component: { getByTestId } } = renderWithTheme(
      <>
        <Button testID="btn-click" onClick={() => snackRef.current?.show()}>Click</Button>
        <Snackbar ref={snackRef} timer={5}> Texto children</Snackbar>
      </>
    )
    fireEvent.click(getByTestId('btn-click'))
    expect(screen.getByText('Click')).toBeInTheDocument()
    expect(snackRef.current?.show()).toBeUndefined()
  })
  it('should render correctly with buttonComponent Prop', () => {
    renderWithTheme(

      <Snackbar
        timer={5}
        buttonComponent={
          <Button onClick={() => ''}>Click</Button>
    }
      >
        {' '}
        Texto children

      </Snackbar>
    )
    expect(screen.getByTestId('btn-component')).toBeInTheDocument()
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
})

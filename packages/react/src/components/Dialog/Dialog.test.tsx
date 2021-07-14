/* eslint-disable max-lines-per-function */
import React from 'react'
import { act, fireEvent } from '@testing-library/react'
import renderWithTheme from '../../helpers/renderWithTheme'
import { Dialog } from '.'
import { DialogBody } from './DialogBody'
import { DialogHeader } from './DialogHeader'
import { DialogFooter } from './DialogFooter'

describe('Dialog', () => {
  test('should render correctly with DialogBody and DialogFooter', () => {
    const { styles, component } = renderWithTheme(
      <Dialog role="alertdialog" ariaDescribedBy="description">
        <DialogBody>
          <p id="description">something on the body</p>
        </DialogBody>
        <DialogFooter>something on the footer</DialogFooter>
      </Dialog>
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  test('should render correctly with DialogHeader, DialogBody and DialogFooter', () => {
    const { styles, component } = renderWithTheme(
      <Dialog role="dialog" ariaLabelledBy="title" ariaDescribedBy="description">
        <DialogHeader title="Example" id="title" />
        <DialogBody>
          <p id="description">something on the body</p>
        </DialogBody>
        <DialogFooter>something on the footer</DialogFooter>
      </Dialog>
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  test('should render correctly the divider at DialogBody', () => {
    const { styles, component } = renderWithTheme(
      <Dialog role="dialog" ariaLabelledBy="title" ariaDescribedBy="description">
        <DialogHeader title="Example" id="title" />
        <DialogBody showDivider>
          <p id="description">something on the body</p>
        </DialogBody>
        <DialogFooter>something on the footer</DialogFooter>
      </Dialog>
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  test('should render correctly with the given size', () => {
    const { styles, component } = renderWithTheme(
      <Dialog role="dialog" ariaLabelledBy="title" ariaDescribedBy="description" size="large">
        <DialogHeader title="Example" id="title" />
        <DialogBody showDivider>
          <p id="description">something on the body</p>
        </DialogBody>
        <DialogFooter>something on the footer</DialogFooter>
      </Dialog>
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  test('should render correctly when window is smaller than component', () => {
    act(() => {
      global.innerWidth = 320
      global.innerHeight = 664

      fireEvent(window, new Event('resize'))
    })

    const { styles, component } = renderWithTheme(
      <Dialog role="dialog" ariaLabelledBy="title" ariaDescribedBy="description" size="large">
        <DialogHeader title="Example" id="title" />
        <DialogBody showDivider>
          <p id="description">something on the body</p>
        </DialogBody>
        <DialogFooter>something on the footer</DialogFooter>
      </Dialog>
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})

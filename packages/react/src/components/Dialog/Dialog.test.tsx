/* eslint-disable max-lines-per-function */
import React from 'react'
import { act, fireEvent } from '@testing-library/react'
import renderWithTheme from '../../helpers/renderWithTheme'
import { Dialog } from '.'
import { DialogBody } from './DialogBody'
import { DialogHeader } from './DialogHeader'
import { DialogFooter } from './DialogFooter'

jest.mock('../Portal/Portal')

describe('Dialog', () => {
  test('should render correctly with DialogBody and DialogFooter', () => {
    const { styles, component } = renderWithTheme(
      <Dialog role="alertdialog" ariaDescribedBy="description" open>
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
      <Dialog role="dialog" ariaLabelledBy="title" ariaDescribedBy="description" open>
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
      <Dialog role="dialog" ariaLabelledBy="title" ariaDescribedBy="description" open>
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
      <Dialog role="dialog" ariaLabelledBy="title" ariaDescribedBy="description" size="large" open>
        <DialogHeader title="Example" id="title" />
        <DialogBody showDivider>
          <p id="description">something on the body</p>
        </DialogBody>
        <DialogFooter>something on the footer</DialogFooter>
      </Dialog>
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  test('should render correctly when window is smaller than component width', () => {
    act(() => {
      global.innerWidth = 320
      global.innerHeight = 664

      fireEvent(window, new Event('resize'))
    })

    const { styles, component } = renderWithTheme(
      <Dialog role="dialog" ariaLabelledBy="title" ariaDescribedBy="description" size="large" open>
        <DialogHeader title="Example" id="title" />
        <DialogBody showDivider>
          <p id="description">something on the body</p>
        </DialogBody>
        <DialogFooter>something on the footer</DialogFooter>
      </Dialog>
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  test('should not render component with is not open', () => {
    const { styles, component } = renderWithTheme(<Dialog role="dialog" testID="ds-dialog"> something </Dialog>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  test('should call handleOnKeyDown if Escape is pressed', () => {
    const onEscapeKeyDownMock = jest.fn()
    const { component } = renderWithTheme(<Dialog role="dialog" onEscapeKeyDown={onEscapeKeyDownMock} open testID="ds-dialog">something</Dialog>)
    const dialog = component.getByTestId('ds-dialog')

    act(() => {
      dialog.focus()
      fireEvent.keyDown(dialog, {
        key: 'Escape',
        code: 'Escape',
        keyCode: 27,
        charCode: 27
      })
    })

    expect(onEscapeKeyDownMock).toHaveBeenCalled()
  })

  test('should not call handleOnKeyDown if a key other than Escape was pressed', () => {
    const onEscapeKeyDownMock = jest.fn()
    const { component } = renderWithTheme(<Dialog role="dialog" onEscapeKeyDown={onEscapeKeyDownMock} open testID="ds-dialog">something</Dialog>)
    const dialog = component.getByTestId('ds-dialog')

    act(() => {
      dialog.focus()
      fireEvent.keyDown(dialog, {
        key: 'Meta',
        code: 'Meta',
        keyCode: 91,
        charCode: 91
      })
    })

    expect(onEscapeKeyDownMock).not.toHaveBeenCalled()
  })
})

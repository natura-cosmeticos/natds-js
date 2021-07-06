/* eslint-disable max-lines-per-function */
import React from 'react'
import renderWithTheme from '../../helpers/renderWithTheme'
import {
  Dialog, DialogBody, DialogFooter, DialogHeader
} from '.'

describe('Dialog', () => {
  describe('AlertDialog Role', () => {
    test('should render correctly with given children and default props', () => {
      const { styles, component } = renderWithTheme(
        <Dialog role="alertdialog" ariaDescribedBy="description">
          <DialogBody>
            <p id="description">something on the body</p>
          </DialogBody>
        </Dialog>
      )

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })
  })
  describe('Dialog role', () => {
    test('should render correctly with given children', () => {
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
    test('should render correctly with divider at DialogBody', () => {
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

    test('should render correctly with given size', () => {
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
})

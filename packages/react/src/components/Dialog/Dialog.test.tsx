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
          <DialogBody id="description">something on the body</DialogBody>
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
          <DialogBody id="description">something on the body</DialogBody>
          <DialogFooter>something on the footer</DialogFooter>
        </Dialog>
      )

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })
    test('should render correctly with divider at DialogBody', () => {
      const { styles, component } = renderWithTheme(
        <Dialog role="dialog" ariaLabelledBy="title" ariaDescribedBy="description">
          <DialogHeader title="Example" id="title" />
          <DialogBody id="description" showDivider>something on the body</DialogBody>
          <DialogFooter>something on the footer</DialogFooter>
        </Dialog>
      )

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })
  })
})

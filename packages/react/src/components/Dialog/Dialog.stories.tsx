/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { Story, Meta } from '@storybook/react'
import { useState } from '@storybook/client-api'
import {
  Dialog, DialogBody, DialogFooter, DialogHeader
} from '.'
import { Button } from '../Button'
import { DialogProps } from './Dialog.props'

const componentStatus = `
---

Attribute status:

- ✅ **Divider**
- **Size**
    - ❌  \`small\`
    - ❌  \`medium\`
    - ❌  \`large\`

---
`

export default {
  title: 'Components/Dialog',
  component: Dialog,
  subcomponents: { DialogTitle: DialogHeader, DialogBody, DialogAction: DialogFooter },
  parameters: {
    componentSubtitle: 'Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta

export const Playground: Story<DialogProps> = (args) => {
  const [showDialog, setShowDialog] = useState(args.showDialog)

  return (
    <>
      <Button text="open dialog" onClick={() => setShowDialog(!showDialog)} />
      <Dialog {...args} showDialog={showDialog} ariaLabelledBy="dialog-title" ariaDescribedBy="dialog-description">
        <DialogHeader title="Example" id="dialog-title" />
        <DialogBody showDivider>
          <p id="dialog-description">
            This is an example of Dialog, using the DialogHeader and DialogFooter
            subcomponents in addition to passing some content to DialogBody
          </p>
        </DialogBody>
        <DialogFooter>
          <Button text="close" onClick={() => setShowDialog(false)} />
        </DialogFooter>
      </Dialog>
    </>
  )
}
Playground.args = {
  role: 'dialog',
  showDialog: false,
  testID: 'ds-dialog'
}

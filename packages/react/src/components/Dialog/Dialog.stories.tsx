/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { Dialog } from '.'
import { Button } from '../Button'
import { DialogProps } from './Dialog.props'
import IconButton from '../IconButton'
import DialogHeader from './DialogHeader'
import DialogBody from './DialogBody'
import DialogFooter from './DialogFooter'

const componentStatus = `
---

**NOTE**: This component is available in the following variants:

  - ✅ \`standard\` (available but with alternative composition)
  - ✅ \`alert\`** (available but with alternative composition)

With the following attribute status:

- ✅ **Divider**
- **Size**
    - ✅  \`small\`
    - ✅  \`medium\`
    - ✅  \`large\`

---
`

export default {
  title: 'Components/Dialog',
  component: Dialog,
  subcomponents: { DialogHeader, DialogBody, DialogFooter },
  parameters: {
    componentSubtitle: 'Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta

export const Playground: Story<DialogProps> = (args) => {
  const [showDialog, setShowDialog] = useState(args.open)

  return (
    <>
      <Button text="open dialog" onClick={() => setShowDialog(!showDialog)} />
      <Dialog {...args} open={showDialog} ariaLabelledBy="dialog-title" ariaDescribedBy="dialog-description" onEscapeKeyDown={() => setShowDialog(false)}>
        <DialogHeader title="Example" id="dialog-title">
          <div style={{ display: 'flex', gap: 16 }}>
            <IconButton iconName="outlined-default-mockup" onClick={() => ''} ariaLabel="any icon" />
            <IconButton iconName="outlined-default-mockup" onClick={() => ''} ariaLabel="any icon" />
            <IconButton iconName="outlined-default-mockup" onClick={() => ''} ariaLabel="any icon" />
          </div>
        </DialogHeader>
        <DialogBody showDivider>
          <p id="dialog-description" style={{ margin: 0 }}>
            This is an example of Dialog, which uses the DialogHeader, with title
            and three IconButtons, DialogBody and DialogFooter, with one button.
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
  open: true,
  testID: 'ds-dialog'
}

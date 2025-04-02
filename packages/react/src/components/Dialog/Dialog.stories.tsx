import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { Dialog } from '.'
import { Button } from '../Button'
import { DialogProps } from './Dialog.props'
import { IconButton } from '../IconButton'
import { DialogHeader } from './DialogHeader'
import { DialogBody } from './DialogBody'
import { DialogFooter } from './DialogFooter'
import { Icon } from '../Icon'

const componentStatus = `
> Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.

## Properties
| Property                      | Values                                                              |    Status           |
|---                            |                                                                  ---|                  ---|
| **variant(no prop)**          | Standard/Alert  (available but with alternative composition)        | ✅ Available        |
| **ariaDescribedBy**           | string                                                              | ✅ Available        |
| **ariaLabelledBy**            | string                                                              | ✅ Available        |
| **container**                 | An HTML element or function that returns one                        | ✅ Available        |
| **onEscapeKeyDown**           | function                                                            | ✅ Available        |
| **role**                      | dialog, alertdialog                                                 | ✅ Available        |
| **open**                      | true/false                                                          | ✅ Available        |
| **size**                      | small, medium, large                                                | ✅ Available        |
| **brand**                     | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo    | ✅ Available        |

## Technical Usages Examples
`

export default {
  title: 'Components/Dialog',
  component: Dialog,
  subcomponents: { DialogHeader, DialogBody, DialogFooter },
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta

export const Playground: Story<DialogProps> = ({ open, ...args }) => {
  const [showDialog, setShowDialog] = useState(open)

  return (
    <>
      <Button onClick={() => setShowDialog(!showDialog)}>open dialog</Button>
      <Dialog {...args} open={showDialog} onEscapeKeyDown={() => setShowDialog(false)}>
        <DialogHeader title="Example" id="dialog-title">
          <div style={{ display: 'flex', gap: 16 }}>
            <IconButton
              onClick={() => ''}
              ariaLabel="any icon"
              IconComponent={<Icon name="outlined-default-mockup" color="highEmphasis" />}
            />
            <IconButton
              onClick={() => ''}
              ariaLabel="any icon"
              IconComponent={<Icon name="outlined-default-mockup" color="highEmphasis" />}
            />
            <IconButton
              onClick={() => ''}
              ariaLabel="any icon"
              IconComponent={<Icon name="outlined-default-mockup" color="highEmphasis" />}
            />
          </div>
        </DialogHeader>
        <DialogBody showDivider>
          <p id="dialog-description" style={{ margin: 0 }}>
            This is an example of Dialog, which uses the DialogHeader, with title
            and three IconButtons, DialogBody and DialogFooter, with one button.
          </p>
        </DialogBody>
        <DialogFooter
          primaryButton={<Button onClick={() => setShowDialog(false)}>primary button close</Button>}
          secondaryButton={<Button variant="text" onClick={() => setShowDialog(false)}>secondary button close</Button>}
        />
      </Dialog>
    </>
  )
}
Playground.args = {
  ariaDescribedBy: 'dialog-description',
  ariaLabelledBy: 'dialog-title',
  open: true,
  role: 'dialog'
}

export const Accessibility: Story<DialogProps> = ({ open, ...args }) => {
  const [showDialog, setShowDialog] = useState(open)

  return (
    <>
      <Button onClick={() => setShowDialog(!showDialog)}>open dialog</Button>
      <Dialog {...args} open={showDialog} onEscapeKeyDown={() => setShowDialog(false)}>
        <DialogHeader title="Example" id="dialog-title">
          <div style={{ display: 'flex', gap: 16 }}>
            <IconButton
              onClick={() => ''}
              ariaLabel="any icon"
              IconComponent={<Icon name="outlined-default-mockup" color="highEmphasis" />}
            />
            <IconButton
              onClick={() => ''}
              ariaLabel="any icon"
              IconComponent={<Icon name="outlined-default-mockup" color="highEmphasis" />}
            />
            <IconButton
              onClick={() => ''}
              ariaLabel="any icon"
              IconComponent={<Icon name="outlined-default-mockup" color="highEmphasis" />}
            />
          </div>
        </DialogHeader>
        <DialogBody showDivider>
          <p id="dialog-description" style={{ margin: 0 }}>
            This is an example of Dialog, which uses the DialogHeader, with title
            and three IconButtons, DialogBody and DialogFooter, with one button.
          </p>
        </DialogBody>
        <DialogFooter
          primaryButton={<Button onClick={() => setShowDialog(false)}>primary button close</Button>}
          secondaryButton={<Button variant="text" onClick={() => setShowDialog(false)}>secondary button close</Button>}
        />
      </Dialog>
    </>
  )
}
Accessibility.args = {
  accessibility: {
    role: 'dialog',
    'aria-modal': false,
    'aria-labelledby': 'Gaya aria-labelledby',
    'aria-describedby': 'Gaya aria-describedby',
    'aria-label': 'Gaya aria-label',
    tabIndex: 0
  },
  ariaDescribedBy: 'dialog-description',
  ariaLabelledBy: 'dialog-title',
  open: true,
  role: 'dialog'
}

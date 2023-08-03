/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { TextField, TextFieldProps } from '.'
import { Label } from '../Label'
import { Input, InputHelperText } from '../Input'
import StoryContainer from '../../helpers/StoryContainer'
import { Icon } from '../Icon'

const componentStatus = `
---

**NOTE**: This component is available with the following attribute status:

- **Size**
  - ✅  \`medium\`
  - ✅  \`mediumX\`
- **Feedback**
  - ✅  \`error\`
  - ✅  \`success\`
- ✅ **Required**
- ✅ **Disabled**
- ✅ **ReadOnly**
- ✅ **HelperText**
- **Action**
  - ✅  \`icon \`
  - ✅  \`image \`
- **Type**
  - ✅  \`password \`
  - ✅  \`multiline \`
  - ✅  \`text \`

---
`

export default {
  title: 'Components/TextField',
  component: TextField,
  subcomponents: { Label, InputHelperText, Input },
  parameters: {
    componentSubtitle: 'Text fields let users enter and edit text',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta

export const Playground: Story<TextFieldProps> = (args) => {
  const [value, setValue] = useState<string>('')
  const handleKey = (event: React.KeyboardEvent) => {
    if (event.code === 'Enter') {
      // eslint-disable-next-line no-console
      console.log(event.code)
      // eslint-disable-next-line no-alert
      alert(event.key)
    }
  }

  return (
    <StoryContainer>
      <TextField
        {...args}
        onKeyDown={handleKey}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </StoryContainer>
  )
}
Playground.args = { helperText: 'Helper text', label: 'Label', placeholder: 'Placeholder' }

export const Size: Story<TextFieldProps> = (args) => (
  <StoryContainer>
    <TextField {...args} />
    <TextField {...args} size="medium" />
  </StoryContainer>
)

Size.args = { ...Playground.args }

export const HelperText: Story<TextFieldProps> = (args) => (
  <StoryContainer>
    <TextField {...args} helperText="Helper text" />
  </StoryContainer>
)

HelperText.args = { ...Playground.args }

export const Feedback: Story<TextFieldProps> = (args) => (
  <StoryContainer>
    <TextField {...args} feedback="error" />
    <TextField {...args} feedback="success" />
  </StoryContainer>
)

Feedback.args = { ...Playground.args }

export const ReadOnly: Story<TextFieldProps> = (args) => (
  <StoryContainer>
    <TextField {...args} />
  </StoryContainer>
)

ReadOnly.args = { ...Playground.args, readOnly: true, value: 'Hello World' }

export const Required: Story<TextFieldProps> = (args) => (
  <StoryContainer>
    <TextField {...args} />
  </StoryContainer>
)

Required.args = { ...Playground.args, required: true }

export const Disabled: Story<TextFieldProps> = (args) => (
  <StoryContainer>
    <TextField {...args} />
  </StoryContainer>
)

Disabled.args = { ...Playground.args, disabled: true, value: 'Hello World' }

export const DisabledWithIconLeading: Story<TextFieldProps> = (args) => (
  <StoryContainer>
    <TextField {...args} iconLeading={<Icon name="filled-action-love" color={args.disabled ? 'lowEmphasis' : 'highEmphasis'} />} />
  </StoryContainer>
)
DisabledWithIconLeading.args = { ...Playground.args, disabled: true, value: 'Hello World' }

export const Type: Story<TextFieldProps> = (args) => {
  const [password, setPassword] = useState<string>('Hello World')
  const [passwordTrans, setPasswordTrans] = useState<boolean>(false)
  const [text, setText] = useState<string>('Hello World')
  const [textArea, setTextArea] = useState<string>('Hello World')

  return (
    <StoryContainer>
      <TextField
        {...args}
        ariaLabel="Pass"
        onClick={() => setPasswordTrans(!passwordTrans)}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type={`${passwordTrans ? 'text' : 'password'}`}
        label="Password type"
        action="icon"
        IconComponent={<Icon name="outlined-action-visibility" color="highEmphasis" />}
      />
      <TextField {...args} onChange={(e) => { setText(e.target.value) }} value={text} label="Text type" />
      <TextField {...args} onChange={(e) => setTextArea(e.target.value)} value={textArea} type="multiline" label="Multiline type" />
    </StoryContainer>
  )
}

export const ActionIcon: Story<TextFieldProps> = (args) => (
  <StoryContainer>
    <TextField {...args} />
  </StoryContainer>
)

ActionIcon.args = {
  ...Playground.args,
  action: 'icon',
  IconComponent: <Icon name="filled-action-love" color="highEmphasis" />,
  onClick: () => '',
  ariaLabel: 'heart icon button'
}

export const ActionImage: Story<TextFieldProps> = (args) => (
  <StoryContainer>
    <TextField {...args} />
  </StoryContainer>
)

ActionImage.args = {
  ...Playground.args,
  action: 'image',
  src: '/img_placeholder.png',
  alt: 'image placeholder example'
}
export const IconLeading: Story<TextFieldProps> = (args) => (
  <StoryContainer>
    <TextField {...args} />
  </StoryContainer>
)

IconLeading.args = {
  ...Playground.args,
  action: 'image',
  // action: 'icon',
  // IconComponent: <Icon name="filled-action-love" color="highEmphasis" />,
  iconLeading: <Icon name="filled-action-love" color="highEmphasis" />,
  src: '/img_placeholder.png',
  alt: 'image placeholder example'

}

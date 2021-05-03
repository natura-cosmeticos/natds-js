import { getIconColor, getIconName } from './TextField'
import { TextFieldProps } from './TextField.props'

describe('getIconName', () => {
  it('should return outlined-action-check when receive feedback success', () => {
    expect(getIconName('success')).toBe('outlined-action-check')
  })
  it('should return outlined-action-cancel when receive feedback error', () => {
    expect(getIconName('error')).toBe('outlined-action-cancel')
  })
})

describe('getIconColor', () => {
  it('should return `success` when receive feedback success', () => {
    expect(getIconColor('success')).toBe('success')
  })
  it('should return `alert` when receive feedback error', () => {
    expect(getIconColor('error')).toBe('alert')
  })
})

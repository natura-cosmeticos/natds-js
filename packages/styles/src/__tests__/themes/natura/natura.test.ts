import { themes } from '../../../index'

describe('Natura Theme', () => {
  const { natura: { light, dark } } = themes

  test('it should match Natura Light theme snapshot', () => {
    expect(light).toMatchSnapshot('Natura Light Theme')
  })
  test('it should match Natura Dark theme snapshot', () => {
    expect(dark).toMatchSnapshot('Natura Dark Theme')
  })
})

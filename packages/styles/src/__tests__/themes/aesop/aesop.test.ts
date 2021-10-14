import { themes } from '../../../index'

describe('Aesop Theme', () => {
  const { aesop: { dark, light } } = themes

  test('it should match Aesop Light theme snapshot', () => {
    expect(light).toMatchSnapshot('Aesop Light Theme')
  })
  test('it should match Aesop Dark theme snapshot', () => {
    expect(dark).toMatchSnapshot('Aesop Dark Theme')
  })
})

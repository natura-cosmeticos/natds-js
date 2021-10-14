import { themes } from '../../../index'

describe('The Body Shop Theme', () => {
  const { theBodyShop: { light, dark } } = themes

  test('it should match The Body Shop Light theme snapshot', () => {
    expect(light).toMatchSnapshot('The Body Shop Light Theme')
  })
  test('it should match The Body Shop Dark theme snapshot', () => {
    expect(dark).toMatchSnapshot('The Body Shop Dark Theme')
  })
})

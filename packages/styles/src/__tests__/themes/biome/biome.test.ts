import { themes } from '../../../index'

describe('Biome Theme', () => {
  const { biome: { light, dark } } = themes

  test('it should match Biome Light theme snapshot', () => {
    expect(light).toMatchSnapshot('Biome Light Theme')
  })
  test('it should match Biome Dark theme snapshot', () => {
    expect(dark).toMatchSnapshot('Biome Dark Theme')
  })
})

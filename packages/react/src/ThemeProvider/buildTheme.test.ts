import * as themes from '@naturacosmeticos/natds-themes'
import buildTheme from './buildTheme'
import mockTheme from './mock-theme.json'

jest.mock('@naturacosmeticos/natds-themes', () => ({ default: null, __esModule: true }))
describe('Theme', () => {
  it('should build theme with natura light as default', () => {
    themes.default = jest.requireActual('@naturacosmeticos/natds-themes')

    expect(buildTheme()).toStrictEqual(mockTheme)
  })
  it('should throw error if themes is not installed', () => {
    themes.default = null

    expect(() => buildTheme()).toThrow('Unable to load tokens dependency. Check the installation logs for errors')
  })
})

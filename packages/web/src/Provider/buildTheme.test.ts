import { buildTheme } from './buildTheme'

describe('buildTheme', () => {
  it('should build theme with custom option', () => {
    const theme = buildTheme('natura', 'light', 'typography')

    expect(theme).toMatchSnapshot()
  })
  it('should build theme', () => {
    const theme = buildTheme('natura', 'light')

    expect(theme).toMatchSnapshot()
  })
})

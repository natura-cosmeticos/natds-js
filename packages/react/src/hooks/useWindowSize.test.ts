import { fireEvent } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import useWindowSize from './useWindowSize'

jest.useFakeTimers()

describe('hooks/useWindowSize', () => {
  beforeEach(() => {
    global.innerWidth = 768
    global.innerHeight = 664
    fireEvent(window, new Event('resize'))
  })
  it('should read initial innerWidth and innerHeight values from window', () => {
    const { result } = renderHook(() => useWindowSize())

    expect(result.current.width).toEqual(768)
    expect(result.current.height).toEqual(664)
    expect(setTimeout).toHaveBeenCalledTimes(1)
  })
})

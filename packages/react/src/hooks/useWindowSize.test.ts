/* eslint-disable jest/no-disabled-tests */
import { act, fireEvent } from '@testing-library/react'
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
    // expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500)
  })

  it('should update innerWidth and innerHeight values when window resizes', () => {
    const { result } = renderHook(() => useWindowSize())

    expect(result.current.width).toEqual(768)
    expect(result.current.height).toEqual(664)

    act(() => {
      global.innerWidth = 320
      global.innerHeight = 664
      fireEvent(window, new Event('resize'))
    })

    jest.advanceTimersByTime(500)

    expect(result.current.width).toBe(320)
    expect(result.current.height).toBe(664)
    expect(setTimeout).toHaveBeenCalledTimes(3)
    // expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500)
  })
})

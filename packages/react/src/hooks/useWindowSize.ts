import { useEffect, useState } from 'react'

interface WindowSize {
  width: number
  height: number
}

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    let timer: NodeJS.Timeout
    const handler = () => {
      clearTimeout(timer)

      timer = setTimeout(() => setWindowSize(
        {
          width: window.innerWidth,
          height: window.innerHeight
        }
      ), 500)
    }

    window.addEventListener('resize', handler)

    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [])

  return windowSize
}

export default useWindowSize

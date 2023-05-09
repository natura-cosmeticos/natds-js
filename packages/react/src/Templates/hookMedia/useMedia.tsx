import {
  Dispatch, SetStateAction, useEffect, useState
} from 'react'

interface MediaProps {

    mediaOn: boolean
    setMediaOn: Dispatch<SetStateAction<boolean>>
}
export const useMedia = (media: number): MediaProps => {
  const [mediaOn, setMediaOn] = useState(false)
  useEffect(() => {
    const evMedia = window.matchMedia(`(max-width: ${media}px)`)
    evMedia.addEventListener('change', () => {
      if (evMedia.matches) {
        setMediaOn(true)
      } else {
        setMediaOn(false)
      }
    })
    return () => window.removeEventListener('change', () => {
      if (evMedia.matches) {
        setMediaOn(true)
      } else {
        setMediaOn(false)
      }
    })
  }, [])

  return ({
    mediaOn, setMediaOn
  })
}

export default useMedia

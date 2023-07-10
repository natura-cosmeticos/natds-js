import React, { useEffect, useRef, useState } from 'react'
import styles from './SlideBanner.styles'
import { SlideBannerProps } from './SlideBanner.prop'
import Image from '../../../components/Image'
import URLimage from '../mockHome/URLs'

const SlideBanner = React.forwardRef<HTMLDivElement, SlideBannerProps>(
  ({ brand = 'natura_v2' }, ref) => {
    const [bulletOnOF, setBulletOnOF] = useState(0)
    const RefIMG = useRef<HTMLDivElement>(null)

    const {
      container, containerOverflow, containerImageNext, imageWrapper,
      bulletsWrapper, bulletBox, bulletON, bulletOF
    } = styles({ brand })
    const hundleNext = (num: number) => {
      const PageNext = (1280 * num)
      setBulletOnOF(num)
      if (RefIMG.current) {
        RefIMG.current.style.marginLeft = `-${PageNext}px`
      }
    }
    useEffect(() => {
      const timer = setInterval(() => {
        hundleNext(Math.floor(Math.random() * 3))
      }, 5000)
      return () => clearTimeout(timer)
    }, [])
    return (
      <div ref={ref} className={container}>
        <div className={containerOverflow}>
          <div ref={RefIMG} className={containerImageNext}>
            <div className={imageWrapper}>
              <Image sourceImage={URLimage?.[brand].url1} fallbackImage={URLimage?.[brand].url1} />
            </div>
            <div className={imageWrapper}>
              <Image sourceImage={URLimage?.[brand].url2} fallbackImage={URLimage?.[brand].url2} />
            </div>
            <div className={imageWrapper}>
              <Image sourceImage={URLimage?.[brand].url3} fallbackImage={URLimage?.[brand].url3} />
            </div>
          </div>
        </div>
        <div className={bulletsWrapper}>
          <div onClick={() => hundleNext(0)} className={bulletBox}>
            <div className={bulletOnOF === 0 ? bulletON : bulletOF} />
          </div>
          <div onClick={() => hundleNext(1)} className={bulletBox}>
            <div className={bulletOnOF === 1 ? bulletON : bulletOF} />
          </div>
          <div onClick={() => hundleNext(2)} className={bulletBox}>
            <div className={bulletOnOF === 2 ? bulletON : bulletOF} />
          </div>
        </div>
      </div>
    )
  }
)
export default SlideBanner

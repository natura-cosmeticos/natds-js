/* eslint-disable max-len */
import React, { useRef, useState } from 'react'
import Icon from '../../../components/Icon'
import useMedia from '../../hookMedia/useMedia'
import labelText from '../../mocks/labelText'
import styles from './Slide.styles'

const SlidePosition = {
  widthCardFix: 286,
  pWidht: 286,
  quantVisible: (286 * 3),
  currentSlide: 0,
  totalSlide: 6
}
const bullets = [{ id: 0, bullet: 'on' }, { id: 1, bullet: 'off' }, { id: 2, bullet: 'off' }]

const Slide: React.FC<JSX.ElementChildrenAttribute> = ({ children }) => {
  const [show, setShow] = useState(false)
  const [btnBullet, setBtnBullets] = useState(bullets)
  const refWidth = useRef<HTMLDivElement>(null)
  const { mediaOn } = useMedia(780)
  const {
    container, title, containerSlide, containerRelativo, nextBtn, prevBtn, bulletsContainer, bulletOn, bulletOf
  } = styles()

  const verifyBullets = () => {
    if (SlidePosition.currentSlide === 0) {
      handleBullet(0)
    }
    if (SlidePosition.currentSlide > 2) {
      handleBullet(1)
    }
    if (SlidePosition.currentSlide > 5) {
      handleBullet(2)
    }
  }
  const handleNext = () => {
    setShow(true)
    SlidePosition.currentSlide += 1
    let resultNext = (SlidePosition.pWidht * SlidePosition.currentSlide)
    if (refWidth.current) {
      if (SlidePosition.currentSlide > SlidePosition.totalSlide) {
        SlidePosition.currentSlide = 0
        resultNext = 0
        setShow(false)
      }
      verifyBullets()
      refWidth.current.style.marginLeft = `-${resultNext}px`
    }
  }
  const handlePrev = () => {
    SlidePosition.currentSlide -= 1
    let resultPrev = (SlidePosition.pWidht * SlidePosition.currentSlide)
    if (refWidth.current) {
      if (SlidePosition.currentSlide <= 0) {
        SlidePosition.currentSlide = 0
        resultPrev = 0
        setShow(false)
      }
      verifyBullets()
      refWidth.current.style.marginLeft = `-${resultPrev}px`
    }
  }

  const handleBullet = (num: number) => {
    const newBullets = btnBullet.map((b) => {
      if (b.id === num) {
        return ({ id: b.id, bullet: 'on' })
      }
      return ({ id: b.id, bullet: 'off' })
    })
    setBtnBullets(() => [...newBullets])
    const position = (SlidePosition.quantVisible * num)
    if (refWidth.current) {
      refWidth.current.style.marginLeft = `-${position}px`
    }
    if (position <= 0) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  return (
    <div className={container}>
      <div className={title}>
        {`${labelText.Slide.title}`}
      </div>
      <div className={containerRelativo}>
        {
                show
          && (
          <div className={prevBtn} onClick={() => handlePrev()}>
            <Icon size="medium" name="outlined-navigation-arrowright" color="lowEmphasis" />
          </div>
          )
            }
        <div className={nextBtn} onClick={() => handleNext()}>
          <Icon size="medium" name="outlined-navigation-arrowleft" color="lowEmphasis" />
        </div>
        <div ref={refWidth} className={containerSlide}>
          {/* CardSlide */}
          {children}
        </div>
      </div>
      <div className={bulletsContainer}>
        {
            !mediaOn
            && btnBullet.map((bulle, index) => (
              <div onClick={() => handleBullet(index)} className={bulle.bullet === 'on' ? bulletOn : bulletOf} />
            ))
        }
      </div>
    </div>
  )
}

export default Slide

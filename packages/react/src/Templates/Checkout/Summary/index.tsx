import React, { useEffect, useState } from 'react'
import styles from './style'
import Typography from '../../../components/Typography'
import Divider from '../../../components/Divider/Divider'
import ProgressBar from '../../TeamComponent/ProgressBar/ProgressBar'
import TotalAmount from './TotalAmount'
import Icon from '../../../components/Icon'
import useMedia from '../../hookMedia/useMedia'
import labelText from '../../mocks/labelText'

const Summary: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true)
  const {
    header, col, colPd, text, row, colCenter, arrowWrapper, wrapperControl
  } = styles({ isOpen })
  const { mediaOn } = useMedia(1280)
  useEffect(() => {
    setIsOpen(true)
  }, [mediaOn])
  return (
    <>
      <div className={header}>

        <Typography variant="heading6">
          {`${labelText.summary.title}`}
        </Typography>

        {
          mediaOn
        && (
        <div className={arrowWrapper} onClick={() => setIsOpen(!isOpen)}>
          {
            isOpen
              ? <Icon size="medium" name="outlined-navigation-arrowbottom" color="highlight" />
              : <Icon size="medium" name="outlined-navigation-arrowtop" color="highlight" />
          }
        </div>
        )
        }

      </div>
      <div className={col}>
        <Divider variant="full-bleed" />
      </div>
      <div className={wrapperControl}>
        <div className={`${colPd}`}>
          <div className={text}>
            {`${labelText.summary.subTitle}`}
          </div>
          <div className={row}>
            <ProgressBar point={30} minPoint={30} />
          </div>
        </div>
        <div className={colPd}>
          <Divider variant="full-bleed" />
        </div>
        <div className={colCenter}>
          <TotalAmount />
        </div>
      </div>
    </>
  )
}
export default Summary

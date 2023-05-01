import React from 'react'
import styles from './style'
import Typography from '../../../components/Typography'
import Divider from '../../../components/Divider/Divider'
import ProgressBar from '../../TeamComponent/ProgressBar/ProgressBar'
import TotalAmount from './TotalAmount'

const Summary: React.FC = () => {
  const {
    header, col, colPd, text, row, colCenter
  } = styles()
  return (
    <>
      <div className={header}>
        <Typography variant="heading6"> Resumo do Pedido</Typography>
      </div>
      <div className={col}>
        <Divider variant="full-bleed" />
      </div>
      <div className={`${colPd}`}>
        <div className={text}>
          Continue! Você só precisa de 30 pts para atingir seu pedido mínimo!
        </div>
        <div className={row}>
          <ProgressBar point={10} />
        </div>
      </div>
      <div className={colPd}>
        <Divider variant="full-bleed" />
      </div>
      <div className={colCenter}>
        <TotalAmount />
      </div>

    </>
  )
}
export default Summary

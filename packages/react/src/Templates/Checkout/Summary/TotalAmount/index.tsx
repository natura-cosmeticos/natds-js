import React from 'react'
import Button from '../../../../components/Button'
import Divider from '../../../../components/Divider/Divider'
import labelText from '../../../mocks/labelText'
import styles from './styles'

const TotalAmount = React.forwardRef<HTMLDivElement, unknown>(
  (props, ref) => {
    const {
      container, rowBetween, keyHead, valueHead, keyBody, valueBody, valueHeadSub, rowPayd,
      containerGap16, row, rowGap16
    } = styles()
    return (
      <>
        <div ref={ref} className={container}>
          <div className={rowBetween}>
            <span className={keyHead}>{`${labelText.summary.totalSale}`}</span>
            <span className={valueHeadSub}>S/000.000.00</span>
          </div>
          <div className={rowBetween}>
            <span className={keyBody}>00 items</span>
            <span className={valueBody}> </span>
          </div>
          <div className={rowBetween}>
            <span className={keyBody}>00 presentes</span>
            <span className={valueBody}> </span>
          </div>
        </div>

        <div className={container}>
          <div className={rowBetween}>
            <span className={keyHead}>{`${labelText.summary.totalProfit}`}</span>
            <span className={valueHead}>S/000.000.00</span>
          </div>
          <div className={rowBetween}>
            <span className={keyBody}>Natura</span>
            <span className={valueBody}>S/000.000.00</span>
          </div>
          <div className={rowBetween}>
            <span className={keyBody}>Avon</span>
            <span className={valueBody}>S/000.000.00</span>
          </div>
          <div className={rowBetween}>
            <span className={keyBody}>Casa & Estilo</span>
            <span className={valueBody}>S/000.000.00</span>
          </div>
        </div>

        <div className={container}>
          <div className={rowBetween}>
            <span className={keyHead}>{`${labelText.summary.totalPurchase}`}</span>
            <span className={valueHead}>S/000.000.00</span>
          </div>
          <div className={rowBetween}>
            <span className={keyBody}>Natura</span>
            <span className={valueBody}>S/000.000.00</span>
          </div>
          <div className={rowBetween}>
            <span className={keyBody}>Avon</span>
            <span className={valueBody}>S/000.000.00</span>
          </div>
          <div className={rowBetween}>
            <span className={keyBody}>Casa & Estilo</span>
            <span className={valueBody}>S/000.000.00</span>
          </div>
        </div>
        <Divider variant="middle" />
        <div className={containerGap16}>
          <div className={rowBetween}>
            <span className={keyHead}>{`${labelText.summary.otherAmounts}`}</span>
          </div>
          <div className={rowBetween}>
            <span className={keyHead}>{`${labelText.summary.taxes}`}</span>
            <span className={valueHead}>S/000.000.00</span>
          </div>
          <div className={rowBetween}>
            <span className={keyHead}>{`${labelText.summary.truckage}`}</span>
            <span className={valueHeadSub}>S/000.000.00</span>
          </div>
          <div className={rowBetween}>
            <span className={keyHead}>{`${labelText.summary.balanceInFavor}`}</span>
            <span className={valueHead}>S/000.000.00</span>
          </div>
          <div className={row}>
            {`${labelText.summary.totalPayable}`}
          </div>
          <div className={row}>
            <div className={rowPayd}>
              -S/000.000.00
            </div>
          </div>
          <div className={rowGap16}>
            <Button fullWidth variant="outlined" onClick={() => ''}>{`${labelText.summary.btnBack}`}</Button>
            <Button fullWidth variant="contained" onClick={() => ''}>{`${labelText.summary.btnContinue}`}</Button>
          </div>
        </div>
      </>
    )
  }
)
export default TotalAmount

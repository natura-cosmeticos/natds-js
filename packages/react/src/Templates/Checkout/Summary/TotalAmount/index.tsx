import React from 'react'
import Button from '../../../../components/Button'
import Divider from '../../../../components/Divider/Divider'
import styles from './styles'

const TotalAmount = React.forwardRef<HTMLDivElement, unknown>(
  (props, ref) => {
    const {
      container, rowBetween, keyHead, valueHead, keyBody, valueBody, valueHeadSub, rowPayd,
      containerGap16, row, rowGap16
    } = styles()
    return (
      <>
        <div className={container}>
          <div className={rowBetween}>
            <span className={keyHead}>Venda Total</span>
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
            <span className={keyHead}>Lucro total</span>
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
            <span className={keyHead}>Compra total</span>
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
            <span className={keyHead}>Outros Valores</span>
          </div>
          <div className={rowBetween}>
            <span className={keyHead}>Impostos</span>
            <span className={valueHead}>S/000.000.00</span>
          </div>
          <div className={rowBetween}>
            <span className={keyHead}>Frete</span>
            <span className={valueHeadSub}>S/000.000.00</span>
          </div>
          <div className={rowBetween}>
            <span className={keyHead}>Saldo a favor</span>
            <span className={valueHead}>S/000.000.00</span>
          </div>
          <div className={row}>
            Valor total a pagar
          </div>
          <div className={row}>
            <div className={rowPayd}>
              -S/000.000.00
            </div>
          </div>
          <div className={rowGap16}>
            <Button fullWidth variant="outlined" onClick={() => ''}>Voltar</Button>
            <Button fullWidth variant="contained" onClick={() => ''}>Continuar</Button>
          </div>
        </div>
      </>
    )
  }
)
export default TotalAmount

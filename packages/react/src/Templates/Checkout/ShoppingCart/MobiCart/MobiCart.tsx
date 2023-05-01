import React from 'react'
import Button from '../../../../components/Button'
import Card from '../../../../components/Card'
import Counter from '../../../../components/Counter'
import { IDataCartProps } from '../../../mocks/mocks'
import Targ from '../../Targ'
import styles from './styles'

type BrandProps =
    'aesop' | 'avon'
    | 'biome'
    | 'natura'
    | 'theBodyShop'
    | 'consultoriaDeBeleza'
    | 'natura_v2'
    | 'casaEestilo'

const MobiCart = React.forwardRef<HTMLDivElement, IDataCartProps>(
  (props, ref) => {
    const {
      prodTitle, url, brand, code, point, theme, price
    } = props
    const {
      cardBody, cardFooter, cell, cellEnd, noBorder, tableRow,
      containerCard, cardHeader, col, cardIMG, textProd, row, textRegular,
      textMedium, textSub, CorrectionPadding
    } = styles()

    return (
      <div className={containerCard}>
        <Targ label="on" size="small" top={16} brand={theme} mode="light" />
        <div className={cardHeader}>
          <div className={cardIMG}>IMG</div>
          <div className={col}>
            <div className={textProd}>{prodTitle}</div>
            <div className={textProd}>{brand}</div>
            <div className={row}>
              <span className={textRegular}>Código:</span>
              <span className={textMedium}>{code}</span>
            </div>
            <div className={row}>
              <span className={textRegular}>Pontos:</span>
              <span className={textMedium}>{point}</span>
            </div>
          </div>
        </div>
        <div className={cardBody}>
          <div className={tableRow}>
            <div className={cell}>
              Oferta
            </div>
            <div className={cell}>
              Receita
            </div>
            <div className={`${cell} ${noBorder}`}>
              Compra
            </div>
          </div>
          <div className={tableRow}>
            <div className={`${cellEnd} ${noBorder} ${textRegular} ${textProd}`}>
              {price}
            </div>
            <div className={`${cellEnd} ${noBorder} ${textRegular} ${textProd}`}>
              {price}
            </div>
            <div className={`${cellEnd} ${noBorder} ${textRegular} ${textProd}`}>
              <span className={textSub}>
                {price}
              </span>
              <span>
                {price}
              </span>
            </div>
          </div>

        </div>
        <div className={cardFooter}>

          <Counter className={CorrectionPadding} onIncrement={() => 1} onDecrement={() => 2} />
          <span className={CorrectionPadding}>
            <Button onClick={() => ''}>Atualizar</Button>
          </span>

        </div>
      </div>
    )
  }
)
export default MobiCart

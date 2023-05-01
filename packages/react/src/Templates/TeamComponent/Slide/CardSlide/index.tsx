import React from 'react'
import Button from '../../../../components/Button'
import Counter from '../../../../components/Counter'
import Targ from '../../../Checkout/Targ'
import styles from './styles'
import Card from '../../../../components/Card'

type BrandProps =
    'aesop' | 'avon'
    | 'biome'
    | 'natura'
    | 'theBodyShop'
    | 'consultoriaDeBeleza'
    | 'natura_v2'
    | 'casaEestilo'

interface CardSlideProps {
    brand: BrandProps
}
const CardSlide = React.forwardRef<HTMLDivElement, CardSlideProps>(
  (props, ref) => {
    const { brand } = props
    const {
      cardBody, cardFooter, cell, cellEnd, noBorder, tableRow,
      containerCard, cardHeader, col, cardIMG, textProd, row, textRegular,
      textMedium, textSub, CorrectionPadding
    } = styles()

    const brandTransform = (brands: string) => ({
      aesop: 'Aesop',
      avon: 'Avon',
      biome: 'Biome',
      natura: 'Natura',
      natura_v2: 'Natura',
      theBodyShop: ' The Body Shop',
      consultoriaDeBeleza: 'Consultoria de Beleza',
      casaEestilo: 'Casa & Estilo'
    })[brands]

    return (
      <Card elevation>
        <div className={containerCard}>
          <Targ value="10%" label="off" size="medium" top={24} brand={brand} mode="light" />
          <div className={cardHeader}>
            <div className={cardIMG}>IMG</div>
            <div className={col}>
              <div className={textProd}>Refil Desodorante Corporal Kaiak Masculino</div>
              <div className={textProd}>{brandTransform(brand)}</div>
              <div className={row}>
                <span className={textRegular}>Código:</span>
                <span className={textMedium}>50990</span>
              </div>
              <div className={row}>
                <span className={textRegular}>Pontos:</span>
                <span className={textMedium}>4</span>
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
                S/0.000.00
              </div>
              <div className={`${cellEnd} ${noBorder} ${textRegular} ${textProd}`}>
                S/0.000.00
              </div>
              <div className={`${cellEnd} ${noBorder} ${textRegular} ${textProd}`}>
                <span className={textSub}>
                  S/0.000.00
                </span>
                <span>
                  S/0.000.00
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
      </Card>
    )
  }
)
export default CardSlide

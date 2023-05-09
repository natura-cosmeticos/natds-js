import React from 'react'
import Button from '../../../../components/Button'
import Counter from '../../../../components/Counter'
import Targ from '../../../Checkout/Targ'
import styles from './styles'
import Card from '../../../../components/Card'
import labelText from '../../../mocks/labelText'
import { CardSlideProps } from './CardSlide.props'
import Image from '../../../../components/Image'

const CardSlide = React.forwardRef<HTMLDivElement, CardSlideProps>(
  (props, ref) => {
    const {
      prodTitle,
      brand,
      code,
      point,
      price,
      url
    } = props
    const {
      cardBody, cardFooter, cell, cellEnd, noBorder, tableRow,
      containerCard, cardHeader, col, cardIMG, textProd, row, textRegular,
      textSub, CorrectionPadding
    } = styles()

    return (
      <Card ref={ref} elevation>
        <div className={containerCard}>
          <Targ value="10%" label="off" size="medium" top={24} mode="light" />
          <div className={cardHeader}>
            <div className={cardIMG}>
              <Image sourceImage="INVALID_URL" fallbackImage={url} />
            </div>
            <div className={col}>
              <div className={textProd}>{prodTitle}</div>
              <div>
                <div className={textProd}>{brand}</div>
                <div className={row}>
                  <span className={textProd}>{`${labelText.mycar.tableCardRow.code}:`}</span>
                  <span className={textProd}>{code}</span>
                </div>
                <div className={row}>
                  <span className={textProd}>{`${labelText.mycar.tableCardRow.dots}:`}</span>
                  <span className={textProd}>{point}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={cardBody}>
            <div className={tableRow}>
              <div className={cell}>
                {`${labelText.mycar.tableHead.offer}`}
              </div>
              <div className={cell}>
                {`${labelText.mycar.tableHead.incoming}`}
              </div>
              <div className={`${cell} ${noBorder}`}>
                {`${labelText.mycar.tableHead.purchase}`}
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
              <Button onClick={() => ''}>{`${labelText.Slide.cardSlide.btnAdd}`}</Button>
            </span>

          </div>
        </div>
      </Card>
    )
  }
)
export default CardSlide

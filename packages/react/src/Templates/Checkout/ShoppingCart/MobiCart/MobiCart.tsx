import React from 'react'
import Button from '../../../../components/Button'
import Counter from '../../../../components/Counter'
import Image from '../../../../components/Image'
import labelText from '../../../mocks/labelText'
import { IDataCartProps } from '../../../mocks/mocks'
import Targ from '../../Targ'
import styles from './styles'

const MobiCart = React.forwardRef<HTMLDivElement, IDataCartProps>(
  (props, ref) => {
    const {
      prodTitle,
      url = 'https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web@latest/dist/assets/product-empty-256x256.png',
      brand,
      code,
      point,
      theme,
      price
    } = props
    const {
      cardBody, cardFooter, cell, cellEnd, noBorder, tableRow,
      containerCard, cardHeader, col, cardIMG, textProd, row, textRegular,
      textMedium, textSub, CorrectionPadding
    } = styles()

    return (
      <div ref={ref} className={containerCard}>
        <Targ label="on" size="small" top={16} brand={theme} mode="light" />
        <div className={cardHeader}>
          <div className={cardIMG}>
            <Image sourceImage="INVALID_URL" fallbackImage={url} />
          </div>
          <div className={col}>
            <div className={textProd}>{prodTitle}</div>
            <div className={textProd}>{brand}</div>
            <div className={row}>
              <span className={textRegular}>{`${labelText.mycar.tableCardRow.code}:`}</span>
              <span className={textMedium}>{code}</span>
            </div>
            <div className={row}>
              <span className={textRegular}>{`${labelText.mycar.tableCardRow.dots}:`}</span>
              <span className={textMedium}>{point}</span>
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
            <Button onClick={() => ''}>{`${labelText.mycar.tableCardRow.btnUpdate}`}</Button>
          </span>

        </div>
      </div>
    )
  }
)
export default MobiCart
